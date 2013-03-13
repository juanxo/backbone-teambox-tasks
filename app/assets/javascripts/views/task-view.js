Juanxo.Views.TaskView = Backbone.View.extend({
  tagName: 'li',
  className: 'task',
  template: $('#taskTemplate').html(),

  render: function() {
    var templ = _.template(this.template);
    this.$el.html(templ({model : this.model}));
    return this;
  }
});
