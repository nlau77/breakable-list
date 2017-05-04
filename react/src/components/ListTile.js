import React from 'react';
import { Link } from 'react-router';

const ListTile = (props) => {
  return(
    <div>
      <p onClick={props.handleClick}>{props.name}</p>
    </div>
  )
}

export default ListTile;
