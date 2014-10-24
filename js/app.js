window.App = {};

$(function() {
  var noteCollection = new App.NoteCollection([{
    title: 'test1',
    body: 'test1 body'
  }, {
    title: 'test2',
    body: 'test2 body'
  }]);

  var mainContainer = new App.Container({
    el: '#main-container'
  });

  var noteListView = new App.NoteListView({
    collection: noteCollection
  });

  mainContainer.show(noteListView);
});
