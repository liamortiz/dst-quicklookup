import React from 'react';
import Footer from './Footer';
import character_data from '../data/characters.json';

const IMAGES = require.context('../images/characters');

function CharacterCard({ name, health, hunger, sanity, perks }) {
  return (
    <div className = "character-container">
      <div className = "character-stats">
        <span className = "health">{health}</span>
        <span className = "hunger">{hunger}</span>
        <span className = "sanity">{sanity}</span>
      </div>
      <img src = {IMAGES(`./${name}.png`)} alt = {`${name}`}/>
      <div className = "perk-description">
        <ul>
          {perks.map((perk, index) => <li key = {index}>{perk}</li>)}
        </ul>
      </div>
    </div>
  );
}

function Characters() {
  
  const getCharacters = () => {
    return character_data.map((data, index) => 
        <CharacterCard key = {index}
          health = {data.health}
          hunger = {data.hunger}
          sanity = {data.sanity}
          perks = {data.perks}
          name = {data.name}
        />
    )
  }

  return (
    <div id = "character-wrapper">
      <h1 className = "main-heading">Characters</h1>
      <div id = "character-cards">
        {getCharacters()}
      </div>
      <Footer />
    </div>
  )
}

export default Characters;
