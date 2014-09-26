// SongQueue.js - Defines a backbone model class for the song queue.
var Playlist = Backbone.Model.extend({
  initialize: function(name){
    this.set('name', name);
    this.set('counter', 0);
    this.songs = new Songs([], name);

    this.on('ended', function() {

    });
    this.on('dequeue', function(song) {
      this.remove(song);
    });
  },

  select: function(){
    this.trigger('select', this);
  },

  playFirst: function() {
    this.at(0).play();
  },

  playFirstIfOneSong: function() {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  playNextSong: function() {
    if (this.counter < this.length-1) {
      this.counter++;
      this.at(this.counter).play();
    }
  }

});
