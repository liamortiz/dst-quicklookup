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

// Returns an array of objects from the tools data randomly non-repeated values
function loadPopularTools() {
  let tools = []
  let indexes = [...Array(tools_json_file.length).keys()]

  for(let i = 0; i < 5; i++) {
    let index = Math.floor(Math.random() * indexes.length)
    tools.push(tools_json_file[indexes.splice(index, 1)]) // Remove that index to avoid repetition
  }
  return tools
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
          <h2>Popular Crafting Sets</h2>
          <div className = "tools-section">
            {
            loadPopularTools().map((item, index) => {
              return (<CraftPreview key = {index} category = "tools" name = {item.name} require = {item.require} description = {item.description} />)})
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
