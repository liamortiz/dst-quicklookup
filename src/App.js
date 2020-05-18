import React from 'react';
import Navigation from './components/Navigation';
import Post from './components/Post';
import CraftPreview from './components/CraftPreview';

// CSS Sheets
import './App.scss';
import './mobile.scss';

// JSON
import update_json_file from './data/updates.json';
import tools_json_file from './data/tools.json';
import fight_json_file from './data/fight.json';

// Returns an array of objects from the passed data randomly, non-repeated values
function getPopularItems(data, number=5) {
  let popular_items = []
  let indexes = [...Array(data.length).keys()]

  for(let i = 0; i < number; i++) {
    let index = Math.floor(Math.random() * indexes.length)
    popular_items.push(data[indexes.splice(index, 1)]) // Remove that index to avoid repetition
  }
  return popular_items
}

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id = "wrapper">
        <div id = "left-container">
          <h1>Don't Starve Updates</h1>
          {
            // Load DST updates from json file
            update_json_file.map((data, index) => {
              return (<Post key = {index}
              title =       {data.title}
              date =        {data.release_date}
              description = {data.description}
              href =        {data.href}
              name =        {data.name}
              features =    {data.features}
              image =       {data.image}
              />)
            })
          }
        </div>
        <div id = "right-container">
          <h2>Popular Items</h2>
          <div className = "tools-section">
            <h3>Tools</h3>
            {
            getPopularItems(tools_json_file, 3).map((item, index) => {
              return (
                <CraftPreview key = {index} category = "tools" name = {item.name} require = {item.require} description = {item.description} />
              )})
            }
          </div>
          <div className = "fight-section">
            <h3>Fight Tab</h3>
            {
            getPopularItems(fight_json_file, 3).map((item, index) => {
              return (
                <CraftPreview key = {index} category = "fight" name = {item.name} require = {item.require} description = {item.description} />
              )})
            }
          </div>
          <div className = "tab-section">
            <h3>Quick Search</h3>
            <div className = "tab-container">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
