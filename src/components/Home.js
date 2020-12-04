import React from 'react';
import PostMaster from './PostMaster';
import CraftMaster from './CraftMaster';
import TabsPreview from './TabsPreview';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <div id = "left-container">
        <h1>Don't Starve Updates</h1>
        <PostMaster />
        <Footer />
      </div>

      <div id = "right-container">
        <h2>Popular Items</h2>
        {<CraftMaster />}

        <div id = "tab-section">
          <h3>Search By Category</h3>
          <TabsPreview />
        </div>

      </div>
    </>
  );
}
export default Home;
