import React from 'react';
import Navigation from './components/Navigation';
import PostMaster from './components/PostMaster';
import CraftMaster from './components/CraftMaster';
import TabsPreview from './components/TabsPreview';

// CSS Sheets
import './App.scss';
import './mobile.scss';

function App() {
  return (
    <div className="App">
      <Navigation />

      <div id = "wrapper">

        {/*Left website panel game updates history*/}
        <div id = "left-container">
          <h1>Don't Starve Updates</h1>
          <PostMaster />
        </div>

        {/*Right panel tool previews crafts*/}
        <div id = "right-container">
          <h2>Popular Items</h2>
          {<CraftMaster />}
          <div id = "tab-section">
            <h3>Quick Search</h3>
            <TabsPreview />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
