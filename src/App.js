import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends Component {

  handleTermChange(term) {
    console.log(term);
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Im lost...what the heck is that spinny thing doing?</h2>
        </div>
        <SearchBar onTermChange={this.handleTermChange}/>
      </div>
    );
  }
}

export default App;
