import React from 'react';
import Navigation from './components/Navigation';
import Post from './components/Post';

//CSS Sheets
import './App.scss';
import './mobile.scss';

//JSON
import update_history from './data/dst_updates.json';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id = "wrapper">
        <div id = "left-container">
          <h1>Don't Starve Updates</h1>
          {
            // Load DST update history from json file
            update_history.map((data, index) => {
              return (<Post key = {index}
              title =        {data.title}
              date =        {data.release_date}
              description = {data.description}
              href =        {data.href}
              name =        {data.name}
              features =    {data.features}
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
