var React = require('react');
var RenderedView = require('./RenderedView');

var Moses = React.createClass({

  getInitialState: function() {
    return {
      content: ""
    };
  },

  handleChange: function(event){
    var content = event.target.value;
    this.setState({content: content});
  },

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6">
            <textarea name="markdown" 
              id="editor" 
              onChange={this.handleChange}
              className="md_editor materialize-textarea">
            </textarea>
          </div>
          <div className="col s6">
            <RenderedView 
              content={this.state.content}/>
          </div>
        </div>
      </div>
    );
  }

});

React.render(<Moses />, document.getElementById('app'))

module.exports = Moses;