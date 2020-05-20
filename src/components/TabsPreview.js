import React from 'react';

const IMAGES = require.context('../images/item_icons/huds');

const TAB_ITEMS = [
  "dress","fight","food",
  "tools","structures","survival",
  "science","magic","refine",
  "books","tinkering","treasure_hunting"
]
// Need to replace placeholder hrefs with real ones eventually.
function TabsPreview(props) {
  return (
    <div id = "tabs-wrapper">
      {
        TAB_ITEMS.map((name, index) => {
          return (
            <div key = {index} className = "tab-container">
              <a href = "index.html"><img src = {IMAGES(`./${name}.png`)} title = {`${name}`} alt = ""/></a>
            </div>
          )
        })
      }
    </div>
  );
}
export default TabsPreview;
