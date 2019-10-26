import React, { Component } from 'react';
import './main.css';

import Toolbar from './components/Toolbar/Toolbar';

class App extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <Toolbar />
      </div>
    );
  }
}

export default App;
