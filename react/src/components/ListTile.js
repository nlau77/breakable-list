import React from 'react';
import { Link } from 'react-router';

const ListTile = (props) => {
  return(
    <div className="text-center">
      <p className={props.recipeClassName} recipe-padding onClick={props.handleClick}>{props.name}</p>
    </div>
  )
}

export default ListTile;
