import React, { Component } from 'react';
import "./About.css";
import Star_Anime from "../assets/Star Anime.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <p>
          <div class="split left">
            <div className="centered">
              <img 
                className="profile_image"
                // Image goes here
                src={Star_Anime}
                alt="Star Anime"
                ></img>
            </div> 
          </div>
          <div className="split right">
          <div className="centered">
            <div className="name">Matthew Wakhweya</div>
            <div className="deets">
              Music fan and Koding King!!!
            </div>
          </div>
        </div>
        </p> 
      </div>
    )
  }
}