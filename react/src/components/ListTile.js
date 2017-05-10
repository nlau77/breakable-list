import React from 'react';
import { Link } from 'react-router';

const ListTile = (props) => {
  return(
    <div className="text-center">
      <div className="wrap-recipes">
        <p className={props.recipeClassName} onClick={props.handleClick}>{props.name}</p>
      </div>
    </div>
  )
}

export default ListTile;
