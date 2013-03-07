_.extend Backbone.OAuth.configs.Teambox, {

  client_id: '0BFiizh27YRyCmTTRsh5zxMe9quXSjqVWffNdFB5'
  redirect_url: 'http://localhost:3000/oauth.html'

  onSuccess: (params) ->
    alert 'Corrupted response' unless params && params.access_token

    # Sets the access token to use in all the fetch requests
    Juanxo.models.BaseModel.access_token = params.access_token

  onError: (params) ->
    alert 'Something went wrong requesting Teambox access'
}
