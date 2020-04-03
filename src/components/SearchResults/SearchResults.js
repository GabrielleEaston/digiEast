import React, { Component } from 'react';
import './SearchResults.css';
import { Route, Link } from "react-router-dom";

class SearchResults extends Component {

  
  render() {
    return (
      <div className="SearchResults">
        
        <div className="grid">
        {this.props.searchResults.map((photo, idx) => {
          return (
            <div key={idx} className="border-image">
              <Link to={`/image/${photo.id}`}>
              <img src={photo.urls.regular} id={photo.id} alt={photo.alt_description} /></Link>
              {/* <p>{photo.description}</p> */}
              <button className="action" onClick={()=>this.props.addPhoto(photo)}>+ add</button>
            </div>
          )
        })}
        </div>
        </div>
    )
  }
}
export default SearchResults;