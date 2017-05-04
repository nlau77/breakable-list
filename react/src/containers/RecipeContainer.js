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

    return (
      <div className="rows">
        <div className="small-4 medium-6 columns">
          <h3 className="text-center">{this.state.recipe.name} </h3>
          <text>{this.state.recipe.instructions}</text>
        </div>
        <div className= "small-4 medium-6 columns">
        </div>
      </div>
    )
  }
}

export default UserRecipes
