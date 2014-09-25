// SongQueueView.js - Defines a backbone view class for the song queue.
var PlaylistView = Backbone.View.extend({
  tagName: "table",

  initialize: function() {
    this.listenTo(this.model.songs,'add', function(){
      this.render();
    });

    this.model.songs.on('remove', function(){
      this.render();
    }, this);

    this.render();
  },

  setPlaylist: function(playlist) {
    this.model = playlist;
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    this.$el.html('<th>Playlist ' + this.model.get('name') + '</th>').append(
      this.model.songs.map(function(song){
        return new PlaylistEntryView({model: song}).render();
      })
    );
    $('.library').after(this.$el);
  }

});
