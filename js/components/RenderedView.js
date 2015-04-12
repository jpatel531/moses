var React = require('react');

var RenderedView = React.createClass({

  render: function() {
    return (
      <div className="md_result markdown-body">
        {this.props.content}
      </div>
    );
  }

});

module.exports = RenderedView;