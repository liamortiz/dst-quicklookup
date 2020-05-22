import React from 'react';
import CraftPreview from './CraftPreview';
import tools from '../data/tabs/tools.json';
import fight_items from '../data/tabs/fight.json';

// Returns an array of objects from the passed data randomly, non-repeated values
function getPopularItems(data, number) {
  let popular_items = [];
  let indexes = [...Array(data.length).keys()];

  for(let i = 0; i < number; i++) {
    let index = Math.floor(Math.random() * indexes.length);
    // Remove that index to avoid repetition
    popular_items.push(data[indexes.splice(index, 1)]);
  }
  return popular_items;
}
function loadItems() {
  let popular_tools = getPopularItems(tools, 3);
  let popular_fight = getPopularItems(fight_items, 3);

  let items = popular_tools.concat(popular_fight);
  items = items.map((item, index) => {
    return (
      <CraftPreview key = {index}
      category =  {index < 3 ? "tools" : "fight"}
      name =      {item.name}
      require =   {item.require}
      description ={item.description} />
    )
  })
  // Split the item array into 2 categories tools/fight
  return [items.slice(0, 3), items.slice(3, 6)];
}
function CraftMaster(props) {
  var craft_elements = loadItems();
  return (
    <div>
      <div className = "tools-section">
        <h3>Tools</h3>
        {craft_elements[0]}
      </div>
      <div className = "fight-section">
        <h3>Fight Tab</h3>
        {craft_elements[1]}
      </div>
    </div>

  );
}
export default CraftMaster;
