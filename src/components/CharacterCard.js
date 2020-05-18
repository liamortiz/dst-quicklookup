import React from 'react';
const IMAGES = require.context('../images/characters');

function CharacterCard(props) {
  return (
    <div className = "character-container">
      <img src = {IMAGES(`./${props.name}.png`)} />
      <div className = "character-stats">
        <span className = "health">{props.health}</span>
        <span className = "hunger">{props.hunger}</span>
        <span className = "sanity">{props.sanity}</span>
      </div>
      <div className = "perk-description">
        <h4>Perks</h4>
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
export default CharacterCard;
