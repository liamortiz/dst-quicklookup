import React from 'react';
const IMAGES = require.context("../images/item-icons", true);

/*
You need to make it so it only gets the most viewed or at least 5 random
items from the json data and not all
*/

function CraftPreview(props) {

  // loads the children items along with their required sub items passed by the 'require' object
  function loadItems() {
    const items = []
    for (const [name, amount] of Object.entries(props.require)) {
      items.push(
        <div key = {name} className = "require-image" style = {{backgroundImage : `url(${IMAGES(`./${name}.png`)})`}}>
          <span>{`x${amount}`}</span>
        </div>
      )
    }
    return items;
  }
  return (
    <div className = "craft-container">
      <img src = {IMAGES(`./${props.name}.png`)} alt = {`${props.name}`} title = {`${props.name}`} className = "parent-image" />
      {loadItems()}
    </div>
  );
}
export default CraftPreview;
