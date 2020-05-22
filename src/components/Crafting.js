import React, {Component} from 'react';
import CraftPreview from './CraftPreview';
import fight_tab from '../data/fight.json';
import tools from '../data/tools.json';
import Footer from './Footer';

const CATEGORIES = {
  tools : tools,
  fight : fight_tab
}
class Crafting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter : "tools",
      items : this.loadItems("tools")
    }
  }
  loadItems= (filter) => {
    return (
      CATEGORIES[filter].map((tool, index) => {
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
  handleSelection(value) {
    let items = this.loadItems(value)
    this.setState({
      filter : value,
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
        onChange = {(e) => this.handleSelection(e.target.value)}>
          <option value = "tools">Tools</option>
          <option value = "fight">Fight</option>
        </select>

        <div id = "crafting-container">
          {this.state.items}
        </div>
        <Footer/>
      </div>
    )
  }
}
export default Crafting;
