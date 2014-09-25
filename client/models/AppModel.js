// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('playlist', new Playlist('default'));
    this.set('playlistCollection', new PlaylistCollection());

    this.get('playlistCollection').add(this.get('playlist'));
    this.get('playlistCollection').add(new Playlist('other'));


    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song){
      this.get('currentSong').set('playing', false);
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){
      this.get('playlist').songs.add(song);
    }, this);

    this.get('playlist').on('stop', function(){
      this.set('currentSong');
    }, this);

    this.get('playlistCollection').on('select', function(playlist) {
      this.set('playlist', playlist);
    }, this);

  }

});
