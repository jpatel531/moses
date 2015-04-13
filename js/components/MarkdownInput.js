var React = require('react');

var MarkdownInput = React.createClass({

  handleChange: function(event){
    this.props.handleChange(event);
  },

  render: function() {
    return (
      <div className="col s6">
        <textarea name="markdown" 
          id="editor"
          value={this.props.content}
          onChange={this.handleChange}
          className="md_editor materialize-textarea">
        </textarea>
      </div>
    );
  }

});

module.exports = MarkdownInput;