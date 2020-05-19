import React from 'react';
import Footer from './Footer';
import character_data from '../data/characters.json';

const IMAGES = require.context('../images/characters');

function CharacterCard(props) {
  return (
    <div className = "character-container">
      <div className = "character-stats">
        <span className = "health">{props.health}</span>
        <span className = "hunger">{props.hunger}</span>
        <span className = "sanity">{props.sanity}</span>
      </div>
      <img src = {IMAGES(`./${props.name}.png`)} alt = {`${props.name}`}/>
      <div className = "perk-description">
        <ul>
        {
          props.perks.map((perk, index) => {
            return (
              <li key = {index}>{perk}</li>
            )
          })
        }
        </ul>
      </div>
    </div>
  );
}


// Character page, it loads the character json data and creates a card for each of them.
function Characters() {
  return (
    <div id = "character-wrapper">
      <h2>Characters</h2>
      <div id = "character-cards">
        {
          character_data.map((data, index) => {
            return (
              <CharacterCard key = {index}
              health = {data.health}
              hunger = {data.hunger}
              sanity = {data.sanity}
              perks = {data.perks}
              name = {data.name}
              />
            )
          })
        }
      </div>
      <Footer />
    </div>
  );
}
export default Characters;
