import React from 'react';
import { Link } from 'react-router';

const RecipeForm = props => {
  return (
    <form>
      <label>Name:</label>
      <input type='text'/>

      <label>Instructions:</label>
      <input type='text'/>

      <label>Ingredients: <span>(please seperate ingredients with a comma)</span>: </label>
      <input type='text'/>
    </form>
  )
}

export default RecipeForm
