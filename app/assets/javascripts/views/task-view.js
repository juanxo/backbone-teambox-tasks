Juanxo.Views.TaskView = Backbone.View.extend({
  tagName: 'li',
  className: 'task',
  template: _.template($('#taskTemplate').html()),

  events: {
    'click .task-header': 'toggleExpansion'
  },

  initialize: function() {
    _.bindAll(this, 'render', 'toggleExpansion', 'renderComments');
    var self = this;
    this.expanded = false;
    this.model.comments = new Juanxo.Collections.Comments([], { taskId: this.model.get('id') });
    this.model.comments.fetch({
      success: function(collection) {
        self.renderComments(collection);
      }
    });
  },

  render: function() {
    this.$el.html(this.template({model : this.model}));
    this.el.id = 'task-' + this.model.id;
    if (this.expanded) {
      this.$('.task-comments').show();
      this.renderComments(this.model.comments);
    } else {
      this.$('.task-comments').hide();
    }
    return this;
  },

  renderComments: function(comments) {
    var $comments = this.$('.task-comments');
    $comments.empty();
    if (comments) {
      comments.each(function(comment) {
        var commentHtml = (new Juanxo.Views.CommentView({ model : comment})).render().el;
        $comments.append(commentHtml);
      });
    }
  },

  toggleExpansion: function(e) {
    this.expanded = !this.expanded;
    this.$el.toggleClass('expanded');
    if (this.expanded) {
      this.renderComments(this.model.comments);
    }
    this.$('.task-comments').toggle();
  }

});
