import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Dropdown from './Dropdown';
import search_bar from '../images/search.png';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {input_value : "Quick Search"};
  }
  handleInput = (event) => {
    this.setState({input_value : event.value});
  }
  focusInput = (event) => {
    this.setState({input_value : ""});
  }

  render() {
    return (
      <nav>
        <div id = "logo">
          <h1><a href ="/">DSTLookup</a></h1>
        </div>
        <ul>
          <li><NavLink exact = {true} activeClassName = "active" to = "/">Home</NavLink></li>
          <li><NavLink activeClassName = "active" to = "characters">Characters</NavLink></li>

          <Dropdown id = "Recipes"
            items = {
              <ul>
                <li><a href = "recipes#all">All</a></li>
                <li><a href = "recipes#ds">Don't Starve</a></li>
                <li><a href = "recipes#dst">Dst</a></li>
                <li><a href = "recipes#shipwrecked">Shipwrecked</a></li>
                <li><a href = "recipes#hamlet">Hamlet</a></li>
              </ul>
            }
            />
          <Dropdown id = "Crafting"
            items = {
              <ul>
                <li><a href = "crafting">Tools</a></li>
                <li><a href = "crafting">Light</a></li>
                <li><a href = "crafting">Survival</a></li>
                <li><a href = "crafting">Food</a></li>
                <li><a href = "crafting">Science</a></li>
                <li><a href = "crafting">Fight</a></li>
              </ul>
            }
            />
        </ul>

        <div className = "search-container">
          <input type = "text" value = {this.state.input_value} className = "search" onChange = {this.handleInput} onClick = {this.focusInput}/>
          <img className = "search-icon" src = {search_bar} alt = "search" />
        </div>
      </nav>
    );
  }
}
export default Navigation;
