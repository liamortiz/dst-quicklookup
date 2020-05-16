import React from 'react';

// WARNING: When adding new posts, the image for it must also be added and the IMAGE object needs to be directly changed.
import seashells_hero from "../images/500px-shesells_promo.png";
import shipwrecked_hero from "../images/500px-Shipwrecked_poster.png";
import hamlet_hero from "../images/500px-hamlet.png";

//WARNING: IMAGES keys must match the props.name value from the component below.
const IMAGES = {
  seashell:    seashells_hero,
  shipwrecked: shipwrecked_hero,
  hamlet:      hamlet_hero
}

// Functional component the post state wont be changing.
function Post(props) {
  return (
      <div className = "post-wrapper">
        <h2 className = "post-heading">{props.title}<span className = "release-date">{props.date}</span></h2>

        <a href = {props.href}>
          {/*Calls the IMAGE object with the name value to return its appropiate image.*/}
          <img src = {IMAGES[props.name]} alt = {props.title} className = "post-image"/>
        </a>

        <div className = "post-info">
          <div className = "features">
            <h3>Features</h3>
              <ul>
                {/*This loops through the features array passed by App.js from dst_updates json file*/}
                {
                  props.features.map((feature, index) => {
                  return (<li>{feature}</li>)})
                }
              </ul>
          </div>
          <div className = "description">
            <h3>Description</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
  );
}
export default Post;
