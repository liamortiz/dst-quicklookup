import React, {Component} from 'react';
import RecipeBox from './RecipeBox';
import Footer from './Footer';

import recipes_data from '../data/recipes_ds.json';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input_value : "Filter by Name",
      recipes : recipes_data
    };
  }
  handleInput = (event) => {
    let user_input = event.target.value;
    user_input = user_input.toLowerCase().replace(" ", "_");

    // If user leaves search field blank , show everything
    let filtered_recipes = (user_input === "") ? recipes_data : []

    // The user is searching for something filter by name
    if (filtered_recipes.length === 0) {
      filtered_recipes = recipes_data.filter(data => data.name.includes(user_input))
    }
    // Update the recipes being shown
    this.setState({
      input_value : user_input,
      recipes : filtered_recipes
    })
  }
  focusInput = (event) => {
    if (event.target.value === "Filter by Name") {
      this.setState({input_value : ""});
    }
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
          {
            this.state.recipes.map((data) => {
              return (<RecipeBox key = {data.name} name = {data.name} recipes = {data.recipes}/>)
            })
          }
        </div>
        <Footer />
      </div>
    );
  }
}
export default Recipe;
