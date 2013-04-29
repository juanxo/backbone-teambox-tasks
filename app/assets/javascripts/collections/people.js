(function() {
  Juanxo.Collections.People = Juanxo.Collections.BaseCollection.extend({
    resourceUrl: 'people',

    initialize: function(model, options) {
      this.projectId = options.projectId;
    },

    url: function() {
      var url = Juanxo.Config.apiPrefix;
      if (this.projectId) {
        url += '/projects/' + this.projectId + '/'
      }
    }
  });
}).call(this);
