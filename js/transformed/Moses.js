var React = require('react');
var RenderedView = require('./../js/transformed/RenderedView');

console.log('hello');

var Moses = React.createClass({displayName: "Moses",

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
      React.createElement("div", {className: "container"}, 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "col s6"}, 
            React.createElement("textarea", {name: "markdown", 
              id: "editor", 
              onChange: this.handleChange, 
              className: "md_editor materialize-textarea"}
            )
          ), 
          React.createElement("div", {className: "col s6"}, 
            React.createElement(RenderedView, {
              content: this.state.content})
          )
        )
      )
    );
  }

});

React.render(React.createElement(Moses, null), document.getElementById('app'))

module.exports = Moses;