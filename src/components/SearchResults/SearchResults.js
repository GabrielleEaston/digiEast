import React, { Component } from 'react';
import './SearchResults.css';


class SearchResults extends Component {
  
  
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        {this.props.searchResults.map((photo, idx) => {
          return (
            <div key={idx}>
              <img src={photo.urls.regular} id={photo.id} alt={photo.alt_description} />
              <p>{photo.description}</p>
              <button onClick={()=>this.props.addPhoto(photo)}>+</button>
            </div>
          )
        })}
      </div>
    )
  }
}
export default SearchResults;