import React, {Component} from 'react';
import RecipeBox from './RecipeBox';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {input_value : "Find by Name"};
  }
  handleInput = (event) => {
    this.setState({input_value : event.value});
  }
  focusInput = (event) => {
    this.setState({input_value : ""});
  }
  render() {
    return(
      <div id = "recipe-wrapper">
        <h1 className = "main-heading">Recipes</h1>

        <input type = "text"
        value = {this.state.input_value}
        className=  "quick-search"
        onClick = {this.focusInput}
        onChange = {this.handleInput}
        />

        <div id = "recipe-container">
          <RecipeBox name = "meatballs" />
          <RecipeBox name = "lobster_dinner" />
          <RecipeBox name = "bacon_and_eggs" />
          <RecipeBox name = "meatballs" />
          <RecipeBox name = "lobster_dinner" />
          <RecipeBox name = "bacon_and_eggs" />
          <RecipeBox name = "meatballs" />
          <RecipeBox name = "lobster_dinner" />
          <RecipeBox name = "bacon_and_eggs" />
          <RecipeBox name = "meatballs" />
          <RecipeBox name = "lobster_dinner" />
          <RecipeBox name = "bacon_and_eggs" />
        </div>
      </div>
    );
  }
}
export default Recipe;
