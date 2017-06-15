import React, { Component } from 'react';
import coffee from './coffee-mug.png';
import './App.css';
import GiphyList from './components/GiphyList';
import SearchBar from './components/SearchBar';
import $ from 'jquery-ajax'

class App extends Component {

  constructor() {
    super();

    this.state = {
        giphys: []
      }
  }

  handleSearch(term) {
    $.get(`http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`)
      .then((res)=> {
        var data = res.data;
        var imageURL = data.map((obj) => obj.images.original.url)
        this.setState({giphys: imageURL})
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={coffee} className="App-logo" alt="logo" />
          <h2>Im lost...what the heck is that spinny thing doing?</h2>
        </div>
        <SearchBar onSearch={this.handleSearch.bind(this)}/>
        <GiphyList giphys={this.state.giphys} />
      </div>
    );
  }
}

export default App;
