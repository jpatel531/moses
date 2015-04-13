var React = require('react');

var marked = require('marked');
var Highlights = require('highlights');

console.log('hello')

var RenderedView = React.createClass({displayName: "RenderedView",

  componentWillMount: function() {
    this.marked = marked;

    this.marked.setOptions({
    renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
    });

    this.marked.setOptions({
      highlight: function (code, lang, callback) {
        var highlighter = new Highlights();
        var html = highlighter.highlightSync({
            fileContents: code,
            scopeName: 'source.' + lang
        })
        return html;
      }      
    });

  },

  render: function() {

    var text = this.marked(this.props.content);
    var innerHTML = {__html: text}

    return (
      React.createElement("div", {className: "col s6"}, 
        React.createElement("div", {dangerouslySetInnerHTML: innerHTML, 
              className: "md_result markdown-body"})
      )
    );
  }

});

module.exports = RenderedView;