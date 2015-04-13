var React = require('react');

var Menu = React.createClass({

  componentWillMount: function() {
    var win = global.gui.Window.get();
    var menubar = new global.gui.Menu({ type: 'menubar' });
    var fileMenu = new global.gui.Menu();
    var self = this;

    fileMenu.append(new global.gui.MenuItem({
      label: 'New',
      click: function() {
        self.props.loadText("");
      }
    })); 


    fileMenu.append(new global.gui.MenuItem({
      label: 'Open',
      click: function() {
        global.$('#openFileDialog').change(function(evt){
          console.log(global.$(this).val())
        });
        // self.refs.openFileDialog.change()
        // editor.chooseFile("#openFileDialog", function(filename){
        //   editor.loadFile(filename);
        // });
      }
    }));

    menubar.append(new global.gui.MenuItem({ label: 'File', submenu: fileMenu}));
    win.menu = menubar;

  },

  handleFile: function(e){
    console.log(e.target.files)
  },

  render: function() {

    var hidden = {display: 'none'}

    return (
      <div>
        <input  style={hidden} 
                id="openFileDialog" 
                onChange={this.handleFile}
                type="file" />
        <input  style={hidden} 
                type="file"  
                id="saveFileDialog" 
                nwsaveas="file.md" />
      </div>
    );
  }

});

module.exports = Menu;