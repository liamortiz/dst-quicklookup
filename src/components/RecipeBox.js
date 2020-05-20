import React, {Component} from 'react';
const IMAGES = require.context('../images/item_icons');

function getRecipes(nested_array) {
  // Loops through the nested arrays and splits each set into individual ul elements
  return (
    nested_array.map((set, index) => {
      return (
        <ul key = {index} className = "dish_recipes">
          {
            set.map((food_item, index) => {
              return (
                <li key = {index}>
                  <img
                  src = {IMAGES(`./food/${food_item}.png`)}
                  alt = {food_item}
                  title = {food_item}
                  className = "hud-background"
                  />
                </li>
              )
            })
          }
        </ul>
      )
    })
  )
}
class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded : false,
      recipes : getRecipes(this.props.recipes)[0]}
  }
  handleClick = (event) => {
    // Doing this helps to lower http requests for the images, I tried hiding them with display
    // But the requests were still being sent.
    let recipes = (this.state.expanded) ? getRecipes(this.props.recipes)[0] : getRecipes(this.props.recipes)
    this.setState({expanded : !this.state.expanded, recipes : recipes})

    // Arrow animation
    let transform = (this.state.expanded) ? "" : "rotate(180deg)";
    event.target.style.transform = transform;
  }
  render() {
    return (
      <div className = "recipe-box">
          <img
          src = {IMAGES(`./dishes/${this.props.name}.png`)}
          className = "hud-background"
          alt = {`${this.props.name}`}
          title = {`${this.props.name}`}
          />
          <div className = "arrow"></div>
          <div className = "seperator">
            {this.state.recipes}
            <div className = "dropdown" onClick = {this.handleClick}></div>
          </div>
      </div>
    )
  }
}
export default RecipeBox;
