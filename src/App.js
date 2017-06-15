import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Im lost...what the heck is that spinny thing doing?</h2>
        </div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
