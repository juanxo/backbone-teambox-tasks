Juanxo.Views.TaskView = Backbone.View.extend({
  tagName: 'li',
  className: 'task',
  template: _.template($('#taskTemplate').html()),

  events: {
    'click .task-header': 'toggleExpansion'
  },

  initialize: function() {
    _.bindAll(this, 'render', 'toggleExpansion');
    this.expanded = false;
  },

  render: function() {
    this.$el.html(this.template({model : this.model}));
    if (this.expanded) {
      this.$('.task-comments').show();
      this.renderComments(this.model.get('recent_comments'));
    } else {
      this.$('.task-comments').hide();
    }
    return this;
  },

  renderComments: function(comments) {
    var $comments = this.$('.task-comments');
    $comments.empty();
    _.each(comments, function(comment) {
      comment = new Juanxo.Models.Comment(comment);
      var commentHtml = (new Juanxo.Views.CommentView({ model : comment})).render().el;
      $comments.append(commentHtml);
    });
  },

  toggleExpansion: function(e) {
    this.expanded = !this.expanded;
    this.$el.toggleClass('expanded');
    if (this.expanded) {
      this.renderComments(this.model.get('recent_comments'));
      this.$('.task-comments').show();
    } else {
      this.$('.task-comments').hide();
    }
  }

});
