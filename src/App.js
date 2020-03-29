import React, {Component} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      imgs : []
    }
    
 }
  //Unspalsh api //////

  componentDidMount() {
   
	axios
		.get('https://api.unsplash.com/photos/?client_id=' + `${accessKey}`)
		.then(data => {
      this.setState({ imgs: data.data });
      console.log(this.state.imgs);
		})
		.catch(err => {
			console.log('Error happened during fetching!', err);
		});
}
  
  
  
  
  
  render() {  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}
export default App;
