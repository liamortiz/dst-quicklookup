import React from 'react';
import Post from './Post';
import updates from '../data/updates.json';

class PostMaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts : []
    }
  }
  componentDidMount() {
    this.setState({
      posts : this.loadUpdates()
    });
  }
  handleClick = (index, event) => {

    // Change active class
    document.getElementById('post-active').removeAttribute('id');
    event.target.id = "post-active";

    this.setState({
      posts : this.loadUpdates(index)
    });
  }
  loadUpdates = (index = 0) => {
    return (
    // Load DST updates from updates json file and apply properties
    updates.slice(index, index + 2)
      .map((data, index) => {
        return (<Post key = {index}
        title =       {data.title}
        date =        {data.release_date}
        description = {data.description}
        href =        {data.href}
        name =        {data.name}
        features =    {data.features}
        image =       {data.image}
        />)
      })
    );
  }
  render() {
    return (
      <React.Fragment>
        {this.state.posts}
        <div className = "post-nav">
          <ul>
            <li id = "post-active" onClick = {(e) => this.handleClick(0, e)}>1</li>
            <li onClick = {(e) => this.handleClick(2, e)}>2</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
export default PostMaster;
