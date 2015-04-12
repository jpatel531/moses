var menu = require("./../js/menu.js");
menu.initMenu();

function init(){
  global.$(global.window.document).ready(function(){
    var editor = require("./../js/editor.js");
    var textEditor = global.$('#editor');
    enableTab('editor')
    textEditor.bind('input propertychange', function() {
      editor.reload();
    });
  });
};

function enableTab(id) {
  var el = document.getElementById(id);
  el.onkeydown = function(e) {
  if (e.keyCode === 9) { // tab was pressed

      // get caret position/selection
      var val = this.value,
      start = this.selectionStart,
      end = this.selectionEnd;

      // set textarea value to: text before caret + tab + text after caret
      this.value = val.substring(0, start) + '\t' + val.substring(end);

      // put caret at right position again
      this.selectionStart = this.selectionEnd = start + 1;

      // prevent the focus lose
      return false;

    }
  };
}

// Enable the tab character onkeypress (onkeydown) inside textarea...
// ... for a textarea that has an `id="my-textarea"`
// enableTab('my-textarea');