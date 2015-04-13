var React = require('react');

var MarkdownEditor = React.createClass({

  handleChange: function(event){
    this.props.handleChange(event);
  },

  handleKeyDown: function(e){
    if (e.keyCode === 9) {
      e.preventDefault()
      var node = this.refs.editor.getDOMNode()
      var val = node.value
      var start = node.selectionStart
      var end = node.selectionEnd

      node.value = val.substring(0, start) + '\t' + val.substring(end);
      node.selectionStart = node.selectionEnd = start + 1;
    }
  },

  render: function() {
    return (
      <div className="col s6">
        <textarea name="markdown" 
        ref="editor"
          value={this.props.content}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
          className="md_editor materialize-textarea">
        </textarea>
      </div>
    );
  }

});

module.exports = MarkdownEditor;