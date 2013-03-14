(function() {

Juanxo.Models.Task = Juanxo.Models.BaseModel.extend({
  resourceUrl: 'tasks',

  belongsTo: function() {
    return {
      user: Juanxo.collections.users
    };
  }
});

}).call(this);
