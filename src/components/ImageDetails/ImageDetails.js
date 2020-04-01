import React, { Component } from 'react'
import './ImageDetails.css';

class ImageDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>Image Details Page</h1>
        {this.props.photos.filter(photo => (
          photo.id === this.props.match.params.photoId
        )).map(photo => (
          <>
            <img src={photo.urls.regular} alt={photo.alt_description} />
            <p>{photo.description}</p>
            <p>{photo.created_at}</p>
            <p>Likes: {photo.likes}</p>
            <a href={photo.links.download} target="_blank">Open in a separate window</a>
          </>
        ))}
      </>
    )
  }
}

export default ImageDetails;