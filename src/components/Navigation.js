import React, {Component} from 'react';
import Dropdown from './Dropdown';

//UI Icons
import search_bar from '../images/search.png';

const dropdown_items = {
  mobs : (
    <ul>
      <li><a href = "index.html">Enemies</a></li>
      <li><a href = "index.html">Pets</a></li>
      <li><a href = "index.html">Friendly</a></li>
    </ul>
  ),
  crafting : (
    <ul>
      <li><a href = "index.html">Weapons</a></li>
      <li><a href = "index.html">Armor</a></li>
      <li><a href = "index.html">Structures</a></li>
      <li><a href = "index.html">Magic</a></li>
    </ul>
  )
}

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
          <h1><a href ="index.html">DSTLookup</a></h1>
        </div>
        <ul>
          <li><a href = "index.html" className = "active">Home</a></li>
          <li><a href = "index.html">Characters</a></li>
          <Dropdown id = "Mobs" items = {dropdown_items["mobs"]} />
          <li><a href = "index.html">Recipes</a></li>
          <Dropdown id = "Crafting" items = {dropdown_items["crafting"]} />
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
