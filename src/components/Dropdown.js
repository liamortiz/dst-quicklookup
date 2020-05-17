import React, {Component} from 'react';
import arrowdown from '../images/arrowdown.png';

class Dropdown extends Component {
  handleHoverEnter = () => {
    // Show the dropdown menu
    let dropdown_element = document.getElementById(this.props.id);
    dropdown_element.style.maxHeight = "500px";
    dropdown_element.style.border = "1px solid white";

    // Start the dropdown image animation
    let image_element = document.getElementById(`img-${this.props.id}`);
    image_element.style.transform = "rotate(180deg)";
  }
  handleHoverLeave = () => {
    // Hide the dropdown menu
    let dropdown_element = document.getElementById(this.props.id);
    dropdown_element.style.maxHeight = "0";
    dropdown_element.style.border = "0";

    // Reset the dropdown image animation
    let image_element = document.getElementById(`img-${this.props.id}`);
    image_element.style.transform = "";
  }

  render() {
    return (
      <React.Fragment>
        <li onMouseLeave = {this.handleHoverLeave}>
          <a href = "index.html" onMouseEnter = {this.handleHoverEnter}>{this.props.id}
            <img src = {arrowdown} alt = "expand selection" width = "10" height = "10" id = {`img-${this.props.id}`} />
          </a>
          <div className = "dropdown-container" id = {this.props.id}>{this.props.items}</div>
        </li>
      </React.Fragment>
    );
  }
}
export default Dropdown;
