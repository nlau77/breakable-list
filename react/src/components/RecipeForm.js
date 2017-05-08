import React from 'react';
import { Link } from 'react-router';

const RecipeForm = props => {
  // <label>Instructions:</label>
  // <input type='text' value={props.instructions} onChange={props.handleInstructionsChange}/>
  //
  // <label>Ingredients: </label>
  // <input type='text' value={props.ingredients} onChange={props.handleIngredientsChange}/>
  // <span>(please seperate ingredients with a comma, example cheese, mushrooms, onions)</span>

  return (
    <form onSubmit={props.handleSubmit}>
      <label className="text-center">Give it a title:</label>
      <input type='text' value={props.name} onChange={props.handleNameChange}/>
      <div className="rows">
        <div className="small-2 offset-small-6 offset-large-6 offset-medium-6 columns">
          <input type='submit' className='submit-button' value="Start!"/>
        </div>
      </div>
    </form>
  )
}

export default RecipeForm
