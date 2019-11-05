import React, {Component} from "react";
import {cardData} from "./cardData";

class CardContainer extends Component{

  render(){
    return(
    <div className="base-container">
      <div className="header"> Welcome to Apple Music</div>
        <div className="card-container">
         {cardData.results.map(({artistId, artworkUrl100, artistName, collectionName}) =>{
            return  (
            <div className="card" key={artistId}>
            <div className="image-container">
              <img src={artworkUrl100}  alt={artistName} />
            </div>
            <div className="text-container">
              <span className="text-header">{artistName}</span >
              <span className="text-description">{collectionName}</span >
            </div>  
            </div>)
          })}
        </div>
    </div>
    )
  }
}

export default CardContainer;