var PlaylistCollectionEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= name %></td>'),

  events: {
    'click': function() {
      this.model.select();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
