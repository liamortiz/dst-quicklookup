import React from 'react';
import {Link} from 'react-router-dom';

const IMAGES = require.context('../images/item_icons/huds');

const TAB_ITEMS = [
  "tools", "light", "survival",
  "food", "science",
  "fight", "structures",
  "magic", "dress"
]
// TODO: Need to change a tag with Link and add params to the crafting page from here

function TabsPreview(props) {
  return (
    <div id = "tabs-wrapper">
      {
        TAB_ITEMS.map((name, index) => {
          return (
            <div key = {index} className = "tab-container">
              <Link to = {`crafting/${name}`}>
                <img src = {IMAGES(`./${name}.png`)} title = {`${name}`} alt = ""/>
              </Link>
            </div>
          )
        })
      }
    </div>
  );
}
export default TabsPreview;
