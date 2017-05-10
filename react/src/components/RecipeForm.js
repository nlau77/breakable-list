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
    <div className="recipe-title-form">
      <form onSubmit={props.handleSubmit}>
        <label className="text-center">Give it a title:   </label>
        <input type='text' value={props.name} onChange={props.handleNameChange}/>
        <div className="rows">
          <div className="small-6 small-centered columns text-center">
            <input type='submit' className='button' value="Start!"/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RecipeForm
