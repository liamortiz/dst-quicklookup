import React from 'react';
import {NavLink} from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <div id = "logo">
        <h1><NavLink to = "/">DSTLookup</NavLink></h1>
      </div>
      <ul>
        <li><NavLink exact = {true} activeClassName = "active" to = "/">Home</NavLink></li>
        <li><NavLink activeClassName = "active" to = "/characters">Characters</NavLink></li>
        <li><NavLink activeClassName = "active" to = "/recipes">Recipes</NavLink></li>
        <li><NavLink activeClassName = "active" to = "/crafting">Crafting</NavLink></li>
      </ul>
    </nav>
  );
}
export default Navigation;
