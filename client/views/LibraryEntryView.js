// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td class="songtitle"><%= title %></td><td><%= playCount %></td><td><%= votes %></td><td class="upvote">Upvote</td><td class="downvote">Downvote</td>'),

  events: {
    'click td.songtitle': function() {
      this.model.enqueue();
    },
    'click td.upvote': function() {
      this.model.upvote();
    },
    'click td.downvote': function() {
      this.model.downvote();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
