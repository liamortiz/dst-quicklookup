import React from 'react';
const IMAGES = require.context(`../images/item_icons`, true);

// loads the children items along with their required sub items passed by the 'require' object
function CraftPreview(props) {

  function loadItems() {
    const items = []

    for (const [name, amount] of Object.entries(props.require)) {
      items.push(
        <div
        key = {name}
        className = "require-image hudbackground"
        style = {{backgroundImage : `url(${IMAGES(`./misc/${name}.png`)})`}}>

          <span>{`x${amount}`}</span>

        </div>
      )
    }
    return items;
  }
  return (
    <div className = "craft-container">
      <img src = {IMAGES(`./tabs/${props.category}/${props.name}.png`)}
      alt = {`${props.name}`}
      title = {`${props.name}`}
      className = "parent-image hud-background" />

      {loadItems()}

    </div>
  );
}
export default CraftPreview;
