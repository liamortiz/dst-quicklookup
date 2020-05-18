import React from 'react';
import updates from '../data/updates.json';
import Post from './Post';

function PostMaster(props) {
  return (
    <React.Fragment>
    {
      // Load DST updates from updates json file and apply properties
      updates.map((data, index) => {
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
    }
    </React.Fragment>
  );
}
export default PostMaster;
