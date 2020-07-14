import React, { Component } from "react";
import "./ImageDetails.css";
import ScrollToTop from "../ScrollToTop";

class ImageDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <ScrollToTop>
          {this.props.photos
            .filter(photo => photo.id === this.props.match.params.photoId)
            .map(photo => (
              <div className="flex-container">
                <img src={photo.urls.regular} alt={photo.alt_description} />
                <div className="info">
                  <h5>Enjoy the photo</h5>
                  <p>{photo.alt_description}</p>
                  <div>
                    <p>{photo.description}</p>
                  </div>
                  <p>Photo created at {photo.created_at}</p>
                  <p>{photo.likes} likes</p>
                  <a href={photo.links.download}>Full resolution photo</a>
                </div>
              </div>
            ))}
        </ScrollToTop>
      </>
    );
  }
}

export default ImageDetails;
