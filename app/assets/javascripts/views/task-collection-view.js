Juanxo.Views.TaskCollectionView = Backbone.View.extend({
  el: $('#tasks'),

  initialize: function() {
    this.render();
    _.bindAll(this, "render");
    this.collection.bind("reset add remove", this.render);
  },

  render: function() {
    this.collection.each(function(task) {
      this.renderTask(task);
    }, this);
  },

  renderTask: function(task) {
    var taskView = new Juanxo.Views.TaskView({ model: task});
    this.$el.append(taskView.render().el);
  }
});
