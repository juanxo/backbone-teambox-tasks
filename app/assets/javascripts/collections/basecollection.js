Juanxo.Collections.BaseCollection = Backbone.Collection.extend({
  resourceUrl: '',

  // Teambox needs .js at the end of the url path to trigger jsonp
  url: function() {
    return Juanxo.Config.apiPrefix + this.resourceUrl + '.js';
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
