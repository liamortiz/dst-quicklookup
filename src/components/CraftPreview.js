import React from 'react';
const IMAGES = require.context(`../images/item_icons`, true);


function CraftPreview({ name, category, require }) {

  const loadItems = () => {
    const items = []

    for (const [name, amount] of Object.entries(require)) {
      items.push(
        <div key = {name} className = "require-image hudbackground" style = {{backgroundImage : `url(${IMAGES(`./misc/${name}.png`)})`}}>
          <span>{`x${amount}`}</span>
        </div>
      )
    }
    return items;
  }

  return (
      <React.Fragment>
        <div className = "craft-container">
        <div className = "craft-name">
            {
              // A complicated way of showing the item names.
              name.split("_").map(word => word.charAt(0).toUpperCase() + word.substr(1)).join(" ")
            }
          </div>
          <img src = {IMAGES(`./tabs/${category}/${name}.png`)} alt = {name} title = {name} className = "parent-image hud-background" />
          { loadItems() }
        </div>
      </React.Fragment>
  );
}
export default CraftPreview;
