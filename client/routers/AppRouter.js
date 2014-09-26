var AppRouter = Backbone.Router.extend({
  routes: {
    'test': 'test',
    'playlist/:name':  function(name) {
      //load song, render player, play song
      var playlist = app.appModel.get('playlistCollection').where({name: name})[0];
      playlist.trigger('select', playlist);
    },
    'song/:title': function(title) {
      var song = app.library.where({title: title})[0];
      song.play();
    }
  },

  test: function() {
    console.log('testing route');
  }
});
