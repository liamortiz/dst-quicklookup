import React from 'react';
import arrowdown from '../images/arrowdown.png';

const IMAGES = require.context('../images/item_icons/dishes')

function RecipeBox(props) {
  return (
    <div className = "recipe-box">
      <div className = "thumbnail">
        <img
        src = {IMAGES(`./${props.name}.png`)}
        alt = {props.name}
        title = {props.name}
        />
      </div>
      <div className = "expand">
        <img src = {arrowdown} alt = "arrow down"/>
      </div>
    </div>
  )
}
export default RecipeBox;
