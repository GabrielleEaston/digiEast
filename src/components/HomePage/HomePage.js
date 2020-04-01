import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PinBoard from '../PinBoard/PinBoard';
import '../../App.css';
class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<>
      <SearchBar handleTermChange={this.props.handleTermChange} submit={this.props.submit} />
      <div className="container">
      <SearchResults searchResults={this.props.searchResults} addPhoto={this.props.addPhoto} />
      <PinBoard boardName={this.props.boardName} nameChange={this.props.nameChange} pinBoard={this.props.pinBoard}
          removePhoto={this.props.removePhoto} />
        </div>

    </>
    );
  }
}

export default HomePage;
