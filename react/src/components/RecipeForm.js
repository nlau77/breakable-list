import React from 'react';
import { Link } from 'react-router';

const RecipeForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>Name:</label>
      <input type='text' value={props.name} onChange={props.handleNameChange}/>

      <label>Instructions:</label>
      <input type='text' value={props.instructions} onChange={props.handleInstructionsChange}/>

      <label>Ingredients: <span>(please seperate ingredients with a comma)</span>: </label>
      <input type='text' value={props.ingredients} onChange={props.handleIngredientsChange}/>

      <div className="rows">
        <div className="offset-small-6 columns">
          <input type='submit' className='submit-button' />
        </div>
      </div>
    </form>
  )
}

export default RecipeForm
