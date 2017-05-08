import React, { Component } from 'react';
import { Link } from 'react-router';
import IngredientTile from '../components/IngredientTile'
import IngredientContainer from './IngredientContainer'

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
          />
      )
    })

    return (
      <div className="rows">
        <h3 className="text-center">{this.state.recipe.name} </h3>
        <div className="small-12 medium-6 columns">
          <h5 className="recipe-header">Instructions</h5>
          <text>{this.state.recipe.instructions}</text>
        </div>
        <div className= "small-12 medium-6 columns">
          <h5 className="recipe-header">Ingredients</h5>
          <div className="rows">
            <div className="columns small-6">
              <ul>
                {ingredientList}
              </ul>
             </div>

             <div className="columns small-6">
              <ul>
                {ingredientList}
              </ul>
             </div>
           </div>
         </div>
         <div className="rows">
           <div className="small-6 columns">
            <h4>place holder</h4>
           </div>
           <div className="small-6 columns">
            <IngredientContainer
            recipeId={this.props.params.id}
            />
           </div>
         </div>
      </div>
    )
  }
}

export default UserRecipes
