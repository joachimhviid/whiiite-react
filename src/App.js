import React, { Component } from 'react';
import './main.css';

import Toolbar from './components/Toolbar/Toolbar';
import Drawer from './components/Drawer/Drawer';


class App extends Component {
  state = {
    drawerOpen: false
  };

  drawerToggleClick = () => {
    this.setState((prevState) => {
      return {drawerOpen: !prevState.drawerOpen};
    });
  };

  render() {
    let drawer;

    if (this.state.drawerOpen) {
      drawer = <Drawer />;
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'visible';
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClick} />
        {drawer}
      </div>
    );
  }
}

export default App;
