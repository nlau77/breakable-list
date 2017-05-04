import React, { Component }  from 'react';
import { Link } from 'react-router';
import IngredientTile from '../components/IngredientTile'

class UserRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
      ingredients: []
    }
  }
  componentDidMount(){
    let recipeId = this.props.params.id;
    fetch(`/api/v1/user_recipes/${recipeId}`, {credentials: 'same-origin'})
      .then((response) => response.json())
      .then((responseData) =>{
        // debugger
        this.setState({
          recipe : responseData.recipe,
          ingredients : responseData.ingredients
        })
      })
  }
  render(){
    let ingredientList = this.state.ingredients.map(ingredient => {
      return(
        <IngredientTile
          key={ingredient.id}
          name={ingredient.name}
          />
      )
    })

    return (
      <div className="rows">
        <h3 className="text-center">{this.state.recipe.name} </h3>
        <div className="small-4 medium-6 columns">
          <h5 className="recipe-header">Instructions</h5>
          <text>{this.state.recipe.instructions}</text>
        </div>
        <div className= "small-3 medium-6 columns">
          <h5 className="recipe-header">Ingredients</h5>
          <ul>
          {ingredientList}
          </ul>
        </div>
      </div>
    )
  }
}

export default UserRecipes
