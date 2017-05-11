import React from 'react';
import { Link } from 'react-router';

const IngredientListTile = (props) => {
  return(
      <div className="small-6 large-4 columns">
        <p onClick={props.handleClick} className={props.className}>{props.name}</p>
      </div>
  )
}

export default IngredientListTile;
