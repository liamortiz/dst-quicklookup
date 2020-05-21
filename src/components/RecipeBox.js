import React, {Component} from 'react';
const IMAGES = require.context('../images/item_icons');

function getImage(item_name, index) {
  return (
    <li key = {index}>
      <img
      src = {IMAGES(`./food/${item_name}.png`)}
      alt = {item_name}
      title = {item_name}
      className = "hud-background"
      />
    </li>
  )
}
// Loops through recipe nested array and returns the recipe in sets.
function getRecipes(data, all=false) {
  // data -> [[4], [4], [4], [4]]
  if (all) {
    return (
      data.map((set, index) => {
        return (
          <ul key = {index} className = "dish_recipes">
            {set.map((item_name, index) => {
              return (getImage(item_name, index))
            })}
          </ul>)}))
  }
  return (
    <ul className = "dish_recipes">
      {data[0].map((item_name, index) => {
        return (getImage(item_name, index))
      })}
    </ul>)
}
class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded : false,
      recipes : getRecipes(this.props.recipes)}
  }
  getDropDown = () => {
    return (this.props.recipes.length !== 1 ? <div className = "dropdown" onClick = {this.handleClick}></div> : "")
  }
  handleClick = (event) => {
    // Doing this helps to lower http requests for the images, I tried hiding them with display
    // But the requests were still being sent.
    let recipes = getRecipes(this.props.recipes, !this.state.expanded);
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
            {this.getDropDown()}
          </div>
      </div>
    )
  }
}
export default RecipeBox;
