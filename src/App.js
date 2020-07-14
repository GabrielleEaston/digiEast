import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import ImageDetails from "./components/ImageDetails/ImageDetails";
import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      term: "",
      pinBoardName: "My Photo Collection",
      pinBoard: []
    };
  }

  //////////////////////Unsplash APi key///////
  //search api
  //https://api.unsplash.com/search/photos?query=london&client_id=
  //https://api.unsplash.com/photos/?client_id=
  //////////////////////////////////////////////
  ///////// //////////UnSplash api/////////////
  ///////////////////////////////////////////////
  handleTermChange = event => {
    this.setState({
      term: event.target.value
    });
  };
  updatePinBoardName = name => {
    this.setState({ pinBoardName: name });
  };

  handleSubmit = () => {
    const accessKey = "b9qRHLy4R0pm0oGfjfTBsY3iEvdMHpC3CF-oUmcXiKo";
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${this.state.term}&client_id=${accessKey}`
      )
      .then(data => {
        this.setState({ images: data.data.results });
        console.log(this.state.images);
      })
      .catch(err => {
        console.log("Error happened during fetching!", err);
      });
  };

  addPhoto = photo => {
    let photos = this.state.pinBoard;
    if (photos.find(savedPhoto => savedPhoto.id === photo.id)) {
      return;
    }
    photos.push(photo);
    this.setState({ pinBoard: photos });
  };
  removePhoto = photo => {
    let photos = this.state.pinBoard;
    photos = photos.filter(currentPhoto => currentPhoto.id !== photo.id);
    this.setState({ pinBoard: photos });
  };

  render() {
    return (
      <div>
        <header>
          <h1>Digi East</h1>
          <Link to="/">
            <h3>Home</h3>
          </Link>
        </header>
        <div className="App">
          {this.state.images && (
            <Route
              exact
              path="/"
              render={() => (
                <HomePage
                  handleTermChange={this.handleTermChange}
                  submit={this.handleSubmit}
                  searchResults={this.state.images}
                  addPhoto={this.addPhoto}
                  boardName={this.state.pinBoardName}
                  nameChange={this.updatePinBoardName}
                  pinBoard={this.state.pinBoard}
                  removePhoto={this.removePhoto}
                />
              )}
            />
          )}

          <Route
            exact
            path="/image/:photoId"
            render={props => (
              <ImageDetails photos={this.state.images} {...props} />
            )}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
