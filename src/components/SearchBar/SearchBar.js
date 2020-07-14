import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {
  
  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.props.handleTermChange} placeholder="Enter what you want to see ... " />
        <button onClick={this.props.submit}className="SearchButton">SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;