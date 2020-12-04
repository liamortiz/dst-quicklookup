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
function getRecipes(data, showAll=false) {
  if (showAll) {
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
  state = {
    expanded : false,
    recipes : getRecipes(this.props.recipes)
  }
  getDropDown = () => {
    return (this.props.recipes.length !== 1 ? <div className = "dropdown" onClick = {this.handleClick}></div> : "")
  }
  handleClick = (event) => {
    let recipes = getRecipes(this.props.recipes, !this.state.expanded);
    this.setState({expanded : !this.state.expanded, recipes : recipes})

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
