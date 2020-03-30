import React, {Component} from 'react';

import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      images : []
    }
    
  }
 
  
  //////////////////////Unsplash APi key///////
  //search api
 //https://api.unsplash.com/search/photos?query=london&client_id=
  //https://api.unsplash.com/photos/?client_id=

  ///////UnSplash api//////
  /////////////////////
componentDidMount() {
 
	axios
		.get('https://api.unsplash.com/photos/?client_id=' + `${accessKey}`)
		.then(data => {
      this.setState({ images: data.data });
      console.log(this.state.images);
		})
		.catch(err => {
			console.log('Error happened during fetching!', err);
		});
}
  
  
  
  render() {  
   
      let list = this.state.images.map(image => {
        return(
        <div>
        <img src={image.urls.small} />
        </div >
      )
    }
   
      )
    return (
      <>
        <div className="grid">
          {list}
        </div>
        </>
)
}
}
export default App;
