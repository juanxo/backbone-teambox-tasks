(function(){

Juanxo.Models.BaseModel = Backbone.Model.extend({

  resourceUrl: '',
  // Url root for all models
  // Set resourceUrl on each model, e.g
  // Juanxo.models.Task = Backbone.Model.extend({ resourceUrl: 'task'});
  urlRoot: function() {
    return Juanxo.Config.apiPrefix + this.resourceUrl;
  },

  // Teambox needs .js at the end of the url path to trigger jsonp
  url: function() {
    var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError();
    var endsInSlash = base.charAt(base.length - 1) == '/';
    if (this.isNew()) {
      return base + '.js';
    }
    return base + (endsInSlash ? '' : '/') + encodeURIComponent(this.id) + '.js';
  },

  // Set jsonp dataType and access_token
  // setting jsonp dataType means that accepts header
  // gets messed up, so we can't set it to application/javascript
  sync: function(method, model, options) {
    var newOptions = _.extend({
      dataType: 'jsonp',
      data: { access_token: Juanxo.Config.accessToken },
      processData: false,
    }, options);
    return Backbone.sync(method, model, newOptions);
  }
});

var urlError = function() {
  throw new Error('A "url" property or function must be specified');
};

}).call(this);
