import React from 'react';
import CraftPreview from './CraftPreview';
import tools from '../data/tabs/tools.json';
import fight_items from '../data/tabs/fight.json';

function getPopularItems(data, numberOfItems) {
  const popularItems = [];
  const indexes = [...Array(data.length).keys()];

  for(let i = 0; i < numberOfItems; i++) {
    const index = Math.floor(Math.random() * indexes.length);
    popularItems.push(data[indexes.splice(index, 1)]);
  }
  return popularItems;
}

function loadItems() {

  let items = getPopularItems(tools, 3).concat(getPopularItems(fight_items, 3));

  items = items.map((item, index) => 
      <CraftPreview key = {index}
        category=  {index < 3 ? "tools" : "fight"}
        name=      {item.name}
        require=   {item.require}
        description={item.description} />
    
  )
  // Split the item array into 2 categories tools tab and fight tab
  return [items.slice(0, 3), items.slice(3, 6)];
}
function CraftMaster() {
  const previewTools = loadItems();
  return (
    <div>
      <div className = "tools-section">
        <h3>Popular Tools</h3>
        {previewTools[0]}
      </div>
      <div className = "fight-section">
        <h3>Popular Fight Items</h3>
        {previewTools[1]}
      </div>
    </div>

  );
}
export default CraftMaster;
