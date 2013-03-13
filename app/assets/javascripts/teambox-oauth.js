
_.extend(Backbone.OAuth.configs.Teambox, {

  client_id: '0BFiizh27YRyCmTTRsh5zxMe9quXSjqVWffNdFB5',
  redirect_url: 'http://localhost:3000/oauth.html',

  onError: function(params) {
    alert('Something went wrong requesting Teambox access');
  }
});
