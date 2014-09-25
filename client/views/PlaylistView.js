// SongQueueView.js - Defines a backbone view class for the song queue.
var PlaylistView = Backbone.View.extend({
  tagName: "table",

  initialize: function() {
    this.model.songs.on('add', function(){
      this.render();
    }, this);

    this.model.songs.on('remove', function(){
      this.render();
    }, this);

    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    this.$el.html('<th>Playlist</th>').append(
      this.model.songs.map(function(song){
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }

});
