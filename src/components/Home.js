import React from 'react';
import PostMaster from './PostMaster';
import CraftMaster from './CraftMaster';
import TabsPreview from './TabsPreview';

function Home() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
export default Home;
