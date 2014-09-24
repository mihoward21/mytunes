// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function(){
    this.on('add', this.playFirstIfOneSong);
    this.on('ended', function() {
      this.at(0).dequeue();
    });
    this.on('dequeue', function(song) {
      this.remove(song);
      this.playNextSong();
    });
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
    if (this.length > 0) {
      this.playFirst();
    }
  }


});
