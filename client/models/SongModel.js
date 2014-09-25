// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  initialize: function() {
    this.set('playCount', 0);
    this.set('playing', false);
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    if(!this.get('playing')){
      this.set('playCount', this.get('playCount')+1);
      this.trigger('play', this);
      this.set('playing',true);
    }
  },

  enqueue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('dequeue', this);
  },

  ended: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('ended', this);
  }

});
