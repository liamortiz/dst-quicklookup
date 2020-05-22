import React, {Component} from 'react';
import CraftPreview from './CraftPreview';
import Footer from './Footer';

const JSON_DATA = require.context('../data/tabs');
const CATEGORIES = [
  "tools", "light", "survival",
  "food", "science",
  "fight", "structures",
  "magic", "dress"
];
function getData(category) {
  return JSON_DATA(`./${category}.json`);
}
class Crafting extends Component {
  constructor(props) {
    super(props);

    let filter = this.props.match.params.filter;
    if (!filter || !CATEGORIES.includes(filter)) {filter = CATEGORIES[0]}

    let items = {};
    items[filter] = this.loadItems(filter);

    this.state = {
      filter : filter,
      items : items
    }
  }
  componentDidMount() {
    // If the URL was added a filter update the selected option
    let select_element = document.getElementById(this.state.filter);
    select_element.selected = "selected";
  }
  // Returns a collection of React elements
  loadItems = (filter) => {
    return (
      getData(filter).map((tool, index) => {
        return (
          <CraftPreview key = {index}
          category =  {filter}
          name =      {tool.name}
          require =   {tool.require}
          description ={tool.description} />
        )
      })
    )
  }
  handleSelection(filter) {
    // User updated the selection, if item was previously loaded do nothing else load them.
    let items = this.state.items;
    if (this.state.items[filter] == null) {
      items[filter] = this.loadItems(filter);
    }
    this.setState({
      filter : filter,
      items : items
    })
  }
  render () {
    return (
      <div id = "crafting-wrapper">
        <h1>Tab Category</h1>

        <select
        name = "category"
        id = "crafting-category"
        onChange = {(e) => this.handleSelection(e.target.value)}
        selected = {this.state.filter}
        >
          {
            CATEGORIES.map((category, index) => {
              return (<option key = {index} value = {category} id = {category}>
                {category[0].toUpperCase() + category.substr(1)}
              </option>)
            })
          }
        </select>

        <div id = "crafting-container">
          {this.state.items[this.state.filter]}
        </div>
        <Footer/>
      </div>
    )
  }
}
export default Crafting;
