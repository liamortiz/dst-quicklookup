import React from 'react';
import Navigation from './components/Navigation';
import Post from './components/Post';

// CSS Sheets
import './App.scss';
import './mobile.scss';

// JSON
import dst_updates from './data/updates.json';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id = "wrapper">
        <div id = "left-container">
          <h1>Don't Starve Updates</h1>
          {
            // Load DST updates from json file
            dst_updates.map((data, index) => {
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
        </div>
      </div>
    </div>
  );
}
export default App;
