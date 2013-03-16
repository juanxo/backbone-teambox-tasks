
_.extend(Backbone.OAuth.configs.Teambox, {

  client_id: '0BFiizh27YRyCmTTRsh5zxMe9quXSjqVWffNdFB5',
  redirect_url: 'http://teambox-tasks.herokuapp.com/oauth.html',

  onError: function(params) {
    alert('Something went wrong requesting Teambox access');
  }
});
