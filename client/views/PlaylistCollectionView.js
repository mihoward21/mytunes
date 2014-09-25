var PlaylistCollectionView = Backbone.View.extend({
  tagName: "table",

  initialize: function() {
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    this.$el.html('<th>Playlists</th>').append(
      this.collection.map(function(playlist){
        return new PlaylistCollectionEntryView({model: playlist}).render();
      })
    );
  }
});
