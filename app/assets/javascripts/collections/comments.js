(function() {

  Juanxo.Collections.Comments = Juanxo.Collections.BaseCollection.extend({

    model: Juanxo.Models.Comment,

    initialize: function(models, options) {
      this.taskId = options.taskId;
    },

    /* This resource can be nested to narrow target entities, so we have to
       override the parent url method */
    url: function() {
      var url = Juanxo.Config.apiPrefix;
      if (this.taskId) {
        url += 'tasks/' + this.taskId + '/';
      }

      url += 'comments';
      return url;
    }

  });
}).call(this);
