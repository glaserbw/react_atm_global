import React, { Component } from 'react';
import logo from './ga.png';

import Checking from './Checking.js';
import Savings from './Savings.js';

class App extends Component {
  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
          <div id="title">Bank of GA</div>
        </div>
        <Checking name="Checking" />
        <Savings name="Savings" />
        <div className="clear"></div>
      </div>
    );
  }
}

export default App;
