import React, { Component } from 'react';
import './PinBoard.css';


class PinBoard extends Component {
  handleNameChange = (event) => {
  this.props.nameChange(event.target.value)
  }
  
  
  render() {
    return (
      <div className="PinBoard">
        <input value={this.props.boardName} onChange={this.handleNameChange} />
        {this.props.pinBoard.map(pinPhoto => {
          return <div>

            <img src={pinPhoto.urls.small} alt="placeholder"/>
            <button className="action" onClick={()=>this.props.removePhoto(pinPhoto)}>-</button>

            </div>
        })}
      </div>
    );
  }
}

export default PinBoard;