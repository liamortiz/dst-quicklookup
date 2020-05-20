import React, {Component} from 'react';
import RecipeBox from './RecipeBox';
import Footer from './Footer';

import recipes_json from '../data/recipes_ds.json';

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
          {
            recipes_json.map((data, index) => {
              return (<RecipeBox key = {index} name = {data.name} recipes = {data.recipes}/>)
            })
          }
        </div>
        <Footer />
      </div>
    );
  }
}
export default Recipe;
