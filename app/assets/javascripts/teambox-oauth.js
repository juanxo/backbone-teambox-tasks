
_.extend(Backbone.OAuth.configs.Teambox, {

  client_id: '0BFiizh27YRyCmTTRsh5zxMe9quXSjqVWffNdFB5',
  redirect_url: 'http://localhost:3000/oauth.html',

  onSuccess: function(params) {
    if ( !(params && params.access_token) ) {
      alert('Corrupted response');
    }

    // Sets the access token to use in all the fetch requests
    Juanxo.Config.accessToken = params.access_token;
    var taskCollection = new Juanxo.Collections.Tasks();
    var taskCollectionView = new Juanxo.Views.TaskCollectionView({
      collection: taskCollection
    });
    taskCollection.fetch();

  },

onError: function(params) {
  alert('Something went wrong requesting Teambox access');
}
});
