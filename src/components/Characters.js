import React from 'react';
import CharacterCard from './CharacterCard';
import Footer from './Footer';
import character_data from '../data/characters.json';

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
