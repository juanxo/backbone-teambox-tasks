Juanxo.Views.CommentView = Backbone.View.extend({
  template: _.template($('#commentTemplate').html()),
  tagName: 'li',
  className: 'task-comment',

  initialize: function() {
    _.bindAll(this, 'render');
  },

  render: function() {

    this.$el.html(this.template({ model: this.model }));
    return this;
  }
});
