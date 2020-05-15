import React, {Component} from 'react';

// Post images must be added when adding a new post on the JSON data
import seashells_hero from "../images/500px-shesells_promo.png";
import shipwrecked_hero from "../images/500px-Shipwrecked_poster.png";
import hamlet_hero from "../images/500px-hamlet.png";

// This is sensitve, image names must match the JSON data !!!
const IMAGES = {
  seashell : seashells_hero,
  shipwrecked : shipwrecked_hero,
  hamlet : hamlet_hero
}
/*
This component handles the basic structure of a post.
*/
class Post extends Component {
  render() {
    return (
        <div className = "post-wrapper">
          <h2 className = "post-heading">{this.props.title}<span className = "release-date">{this.props.date}</span></h2>

          <a href = {this.props.href}>
            <img src = {IMAGES[this.props.name]} alt = {this.props.title} className = "post-image"/>
          </a>

          <div className = "post-info">
            <div className = "features">
              <h3>Features</h3>
                <ul>
                  {
                    this.props.features.map((f) => {
                      return (
                        <li>{f}</li>
                      )
                    })
                  }
                </ul>
            </div>
            <div className = "description">
              <h3>Description</h3>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
    );
  }
}
export default Post;
