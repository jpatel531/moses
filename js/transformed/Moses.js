var React = require('react');
var RenderedView = require('./../js/transformed/RenderedView');
var MarkdownEditor = require('./../js/transformed/MarkdownEditor');
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

  saveFile: function(fileName){
    var fs = require('fs');
    fs.writeFile(fileName, this.state.content, function(err){
      if (err) return console.log(err);
      console.log("File saved!");
    });
  },

  handleChange: function(event){
    var content = event.target.innerText;
    this.setState({content: content});
  },

  render: function() {
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement(Menu, {loadText: this.loadText, 
                loadFile: this.loadFile, 
                saveFile: this.saveFile}), 
        React.createElement("div", {className: "row"}, 
          React.createElement(MarkdownEditor, {
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