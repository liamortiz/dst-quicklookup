import React from 'react';
const IMAGES = require.context("../images", true);

function Post(props) {
  return (
      <div className = "post-wrapper">
        <h2 className = "post-heading">{props.title}
          <span className = "release-date">{props.date}</span>
        </h2>

        <a href = {props.href} target = "_blank" title = "Visit Original Wiki" rel="noopener noreferrer">
          <img
            src = {IMAGES(props.image)}
            alt = {props.title}
            className = "post-image"/>
        </a>

        <div className = "post-info">
          <div className = "features">
            {/*This loops through the features array from updates json file*/}
            <h3>Features</h3>
              <ul>
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
