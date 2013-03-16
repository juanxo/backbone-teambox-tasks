(function(){
Juanxo.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  index: function() {
    var taskCollectionView = new Juanxo.Views.TaskCollectionView({
      collection: Juanxo.collections.tasks
    });

  }

});

$(document).ready( function() {
  var teamboxOAuth = new Backbone.OAuth(Backbone.OAuth.configs.Teambox);

  teamboxOAuth.onSuccess = function(params) {

    if ( !(params && params.access_token) ) {
      alert('Corrupted response');
    } else {
      var appRouter = new Juanxo.Routers.AppRouter();


      // Fetch all models and start the app after they've
      // been all loaded.
      // Kinda of backbone bootstrap but with external api ;)
      Juanxo.collections = {
        tasks: new Juanxo.Collections.Tasks(),
        users: new Juanxo.Collections.Users()
      };

      // Sets the access token to use in all the fetch requests
      Juanxo.Config.accessToken = params.access_token;
      $.when(
          Juanxo.collections.tasks.fetch(),
          Juanxo.collections.users.fetch()
          ).done(function(){Backbone.history.start()});
    }

  }

  teamboxOAuth.auth();
});

}).call(this);
