import React from 'react';
const IMAGES = require.context("../images", true);

function Post(props) {
  return (
      <div className = "post-wrapper">
        <h2 className = "post-heading">{props.title}<span className = "release-date">{props.date}</span></h2>

        <a href = {props.href} title = "Visit Klei Website">
          {/*Calls the IMAGE object with the name value to return its appropiate image.*/}
          <img src = {IMAGES(props.image)} alt = {props.title} className = "post-image"/>
        </a>

        <div className = "post-info">
          <div className = "features">
            <h3>Features</h3>
              <ul>
                {/*This loops through the features array passed by App.js from dst_updates json file*/}
                {
                  props.features.map((feature, index) => {
                  return (<li key = {index}>{feature}</li>)})
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
