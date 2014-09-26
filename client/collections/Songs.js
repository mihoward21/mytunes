// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  initialize: function(models, name) {
    this.localStorage = new Backbone.LocalStorage(name);

    //this.fetch();
  },

  model: SongModel

});
