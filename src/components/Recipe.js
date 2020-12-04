import React, { Component } from 'react';
import RecipeBox from './RecipeBox';
import Footer from './Footer';

import recipes_data from '../data/recipes.json';

class Recipe extends Component {
  state = {
    input_value : "Filter by Name",
    recipes : recipes_data.slice(0, 12),
    page_index : 1
  };

  getRecipes(current_index=this.state.page_index) {
    let num_recipes = recipes_data.length;
    let max_index = 12 * current_index;
    let min_index = max_index - 12;

    if (max_index > num_recipes) {
      max_index = num_recipes;
      min_index = num_recipes - ((current_index - 1) * 12);
      min_index = num_recipes - min_index;
    }
    return  recipes_data.slice(min_index, max_index)
  }
  handleInput = (event) => {
    let user_input = event.target.value;
    user_input = user_input.toLowerCase().replace(" ", "_");

    let filtered_recipes = (user_input === "") ? this.getRecipes() : []

    if (filtered_recipes.length === 0) {
      filtered_recipes = recipes_data.filter(data => data.name.includes(user_input))
    }
    
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
  handleClick = (event, index) => {
    if (this.state.page_index === index) {return}

    document.getElementById('post-active').removeAttribute('id');
    event.target.id = "post-active";

    this.setState({
      page_index : index,
      recipes : this.getRecipes(index)
    })
  }
  getPages() {
    let list = [<li key = {0} id = "post-active" onClick = {(e) => this.handleClick(e, 1)}>{1}</li>];
    for(let i = 1; i < Math.ceil(recipes_data.length  / 12); i++) {
      list.push(<li key = {i} onClick = {(e) => this.handleClick(e, i+1)}>{i+1}</li>)
    }
    return list;
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
          <div className = "post-nav">
            <ul>
              {this.getPages()}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Recipe;
