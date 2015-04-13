var React = require('react');
var RenderedView = require('./../js/transformed/RenderedView');
var MarkdownInput = require('./../js/transformed/MarkdownInput');
var Menu = require('./../js/transformed/Menu');


var Moses = React.createClass({displayName: "Moses",

  getInitialState: function() {
    return {
      content: ""
    };
  },

  loadText: function(text){
    this.setState({content: text});
  },

  loadFile: function(file){
    var self = this;
    var fs = require('fs');
    fs.readFile(file, 'utf8', function(err, data){
      if (err) return console.log(err);
      self.loadText(data);
    });
  },

  handleChange: function(event){
    var content = event.target.value;
    this.setState({content: content});
  },

  render: function() {
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement(Menu, {loadText: this.loadText}), 
        React.createElement("div", {className: "row"}, 
          React.createElement(MarkdownInput, {
            content: this.state.content, 
            handleChange: this.handleChange}), 
          React.createElement(RenderedView, {
            content: this.state.content})
        )
      )
    );
  }

});

React.render(React.createElement(Moses, null), document.getElementById('app'))

module.exports = Moses;