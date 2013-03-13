(function(){
Juanxo.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  index: function() {
    var teamboxOAuth = new Backbone.OAuth(Backbone.OAuth.configs.Teambox);
    teamboxOAuth.auth();

    teamboxOAuth.onSuccess = function(params) {
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

    }
  }

});

var appRouter = new Juanxo.Routers.AppRouter();

Backbone.history.start();

}).call(this);
