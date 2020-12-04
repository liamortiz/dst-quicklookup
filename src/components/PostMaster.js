import React from 'react';
import Post from './Post';
import updates from '../data/updates.json';

class PostMaster extends React.Component {

  state = {posts : []}

  componentDidMount() {
    this.loadUpdates(0);
  }

  handleClick = (index, event) => {
    document.getElementById('post-active').removeAttribute('id');
    event.target.id = "post-active";
    this.loadUpdates(index)
  }
  
  loadUpdates = (index) => {
    this.setState({
      posts: updates.slice(index, index+1).map((data, index) => {
        return {
            key: index,
            release_date: data.release_date,
            description: data.description,
            href: data.href,
            name: data.name,
            features: data.features,
            image: data.image,
            title: data.title
        }
      })
    })
  }
  render() {
    return (
      <>
        {this.state.posts.map(post =>  
          <Post 
            key=        {post.key}
            title=      {post.title}
            date=       {post.release_date}
            description={post.description}
            href=       {post.href}
            name=       {post.name}
            features=   {post.features}
            image=      {post.image}
          />)
        }
        <div className = "post-nav">
          <ul>
            <li id="post-active" onClick={(e) => this.handleClick(0, e)}>1</li>
            <li onClick={(e) => this.handleClick(1, e)}>2</li>
            <li onClick={(e) => this.handleClick(2, e)}>3</li>
            <li onClick={(e) => this.handleClick(3, e)}>4</li>
          </ul>
        </div>
      </>
    );
  }
}
export default PostMaster;
