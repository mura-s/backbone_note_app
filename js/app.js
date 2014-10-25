window.App = {};

var initializeNotes = function() {
  var noteCollection = new App.NoteCollection([{
    title: 'test1',
    body: 'body1'
  }, {
    title: 'test2',
    body: 'body2'
  }, {
    title: 'test3',
    body: 'body3'
  }]);

  noteCollection.each(function(note) {
    note.save();
  });

  return noteCollection.models;
};

$(function() {
  App.noteCollection = new App.NoteCollection();

  App.mainContainer = new App.Container({
    el: '#main-container'
  });

  App.noteCollection.fetch().then(function(notes) {
    if (notes.length === 0) {
      var models = initializeNotes();
      App.noteCollection.reset(models);
    }

    var noteListView = new App.NoteListView({
      collection: App.noteCollection
    });

    App.mainContainer.show(noteListView);
  });
});
