import React from 'react';

const IMAGES = require.context("../images", true);

const Post = ({ title, image, description, date, href, features }) => {
  return (
      <div className = "post-wrapper">

        <h2 className = "post-heading">
          {title} <span className = "release-date">{date}</span>
        </h2>

        <a href={href} target="_blank" title="Visit Original Wiki" rel="noopener noreferrer">
          <img src={IMAGES(image)} alt={title} className="post-image"/>
        </a>

        <div className = "post-info">
          <div className = "features">
            <h3>Features</h3>
              <ul>
                {
                features.map((feature, index) => <li key={index}>{feature}</li>)
                }
              </ul>
          </div>

          <div className = "description">
            <h3>Description</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
  );
}
export default Post;
