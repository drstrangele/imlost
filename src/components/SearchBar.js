import React, { Component } from 'react';
import '../index.css'

class SearchBar extends Component {
    constructor() {
        super();
        this.state = { term: '' }
    }

    render() {
      const { onSearch } = this.props;
      const { term } = this.state;
        return (
            <div className="search">
                <input onChange={event => this.setState({ term: event.target.value })} />
                <button onClick={() => onSearch(term)}>Find me giphys</button>
            </div>
        );
    }
}

export default SearchBar;
