import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <div id="logo">
        <h1><NavLink to="/">DSTLookup</NavLink></h1>
      </div>
      <ul>
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/recipes">Recipes</NavLink></li>
        <li><NavLink activeClassName="active" to="/crafting">Crafting</NavLink></li>
        <li><NavLink activeClassName="active" to="/characters">Characters</NavLink></li>
      </ul>
    </nav>
  );
}
export default Navigation;
