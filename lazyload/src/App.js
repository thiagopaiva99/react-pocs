import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Image from './components/Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Image height="200" url="https://picsum.photos/201" />
        <Image height="200" url="https://picsum.photos/202" />
        <Image height="200" url="https://picsum.photos/203" />
        <Image height="200" url="https://picsum.photos/204" />
        <Image height="200" url="https://picsum.photos/205" />
        <Image height="200" url="https://picsum.photos/206" />
        <Image height="200" url="https://picsum.photos/207" />
        <Image height="200" url="https://picsum.photos/208" />
        <Image height="200" url="https://picsum.photos/209" />
        <Image height="200" url="https://picsum.photos/210" />
        <Image height="200" url="https://picsum.photos/211" />
        <Image height="200" url="https://picsum.photos/212" />
        <Image height="200" url="https://picsum.photos/213" />
        <Image height="200" url="https://picsum.photos/214" />
      </div>
    );
  }
}

export default App;
