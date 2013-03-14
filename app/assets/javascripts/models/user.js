Juanxo.Models.User = Juanxo.Models.BaseModel.extend({

  resourceUrl: 'users',

  hasMany: function() {
    return {
      tasks: { collection: Juanxo.collections.tasks, id: 'user_id' }
    };
  }
});
