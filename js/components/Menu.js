var React = require('react');
var $ = require('jquery');

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
        self.chooseFile('open', self.props.loadFile);
      }
    }));

    fileMenu.append(new global.gui.MenuItem({
      label: 'Save',
      click: function() {
        self.chooseFile('save', self.props.saveFile);
      }
    }));

    fileMenu.append(new global.gui.MenuItem({
      label: 'Exit',
      click: function() {
          global.gui.App.quit();
      }
    }));

    menubar.append(new global.gui.MenuItem({ label: 'File', submenu: fileMenu}));
    win.menu = menubar;

  },

  chooseFile: function(intent, callback){
    var chooser;

    if (intent === 'open') {
      chooser = $('#openFileDialog');
    } else if (intent === 'save') {
      chooser = $('#saveFileDialog');
    }

    chooser.change(function(event){
      callback($(this).val())
    });

    chooser.trigger('click');

  },

  render: function() {

    var hidden = {display: 'none'}

    return (
      <div>
        <input  style={hidden} 
                id="openFileDialog" 
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