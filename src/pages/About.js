import React, { Component } from 'react';
import "./About.css";
import star_Anime from "../assets/Star_Anime.jpg";
  
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
                star_Anime
                alt="Profile Pic"
                ></img>
            </div> 
          </div>
          <div className="split right">
          <div className="centered">
            <div className="Matthew Wakhweya">Your Name</div>
            <div className="Music fan and Koding King!!!">
              // Details about you goes here
            </div>
          </div>
        </div>
        </p> 
      </div>
    )
  }
}