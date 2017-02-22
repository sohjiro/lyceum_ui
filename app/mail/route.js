import Ember from 'ember';

window.addEventListener('load', function() {
  var editor;

  ContentTools.StylePalette.add([
      new ContentTools.Style('Author', 'author', ['p'])
  ]);

  editor = ContentTools.EditorApp.get();
  editor.init('*[data-editable]', 'data-name');
});

export default Ember.Route.extend({
});
