(function(){
Juanxo.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  index: function() {
    var teamboxOAuth = new Backbone.OAuth(Backbone.OAuth.configs.Teambox);
    teamboxOAuth.auth();

  }

});

var appRouter = new Juanxo.Routers.AppRouter();

Backbone.history.start();

}).call(this);
