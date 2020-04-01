import React, {Component} from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import PinBoard from './components/PinBoard/PinBoard';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      term: '', 
      pinBoardName: 'My Photo Collection',
      pinBoard: []
      

    }
  }
 
  //////////////////////Unsplash APi key///////
  //search api
  //https://api.unsplash.com/search/photos?query=london&client_id=
  //https://api.unsplash.com/photos/?client_id=
//////////////////////////////////////////////
 ///////// //////////UnSplash api/////////////
  ///////////////////////////////////////////////
  handleTermChange = (event) => {
    this.setState({
      term: event.target.value
    })
  }
  updatePinBoardName = (name) => {
    this.setState({pinBoardName: name})
  }

  
  handleSubmit = () => {
    const accessKey = "b9qRHLy4R0pm0oGfjfTBsY3iEvdMHpC3CF-oUmcXiKo";
  	axios
  		.get(`https://api.unsplash.com/search/photos?query=${this.state.term}&client_id=${accessKey}`)
  		.then(data => {
        this.setState({ images: data.data.results });
        console.log(this.state.images);
  		})
  		.catch(err => {
  			console.log('Error happened during fetching!', err);
  		});
  }
  
  addPhoto = (photo) => {
    let photos = this.state.pinBoard;
    if (photos.find(savedPhoto => savedPhoto.id === photo.id)) {
      return;
    }
    photos.push(photo);
    this.setState({pinBoard: photos})
  }
  removePhoto = (photo) => {
    let photos = this.state.pinBoard;
    photos = photos.filter(currentPhoto => currentPhoto.id !== photo.id);
    this.setState({ pinBoard: photos });
  }
  
  render() {
    return (
      <div>
        <header>
        <h1>Digi East</h1>
          <h3>Home</h3>
          </header>
        <div className="App">
          <SearchBar handleTermChange={this.handleTermChange} submit={this.handleSubmit}/>

          <div className="container">
            {this.state.images && 
              <SearchResults searchResults={this.state.images} addPhoto={this.addPhoto} isRemoval={false}/>}

            <PinBoard boardName={this.state.pinBoardName} nameChange={this.updatePinBoardName} pinBoard={this.state.pinBoard}
              addPhoto={this.addPhoto} removePhoto={this.removePhoto} isRemoval={true}/>


          </div>
        </div>
      </div>
    );
  }
}
export default App;
