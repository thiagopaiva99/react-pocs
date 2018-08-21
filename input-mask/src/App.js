import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Input from './components/input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Input />
      </div>
    );
  }
}

export default App;
