import React, { Component } from 'react';
import { Link } from 'react-router';
import IngredientTile from '../components/IngredientTile'
// probably import some tile

class DisplayList extends Component {
  constructor(props){
    super(props)
    this.state ={
      recipe: {},
      ingredients: [],
      selected_list: ""
    }
  }

  componentDidMount(){
    fetch(`/api/v1/user_lists`, {credentials: 'same-origin'})
      .then((response) => response.json())
      .then((responseData) =>{
        console.log("it comes here")
        this.setState({
          recipe: responseData.recipe,
          ingredients: responseData.ingredients
        })
      })
  }

  render(){
    let ingredientsList = this.state.ingredients.map(ingredient => {
      return(
        <IngredientTile
          key={ingredient.id}
          name={ingredient.name}
        />
      )
    })

    return(
      <div className="row">
        <h3 className="text-center">Grocery List</h3>
        <div className="text-center columns small-12 medium-6">
          <h5>{this.state.recipe.title}</h5>
            <ul>
              {ingredientsList}
            </ul>
        </div>
        <div className=" columns small-12 medium-6 large- 4">
          <h5>place holder text</h5>
        </div>
      </div>
    )
  }
}

export default DisplayList
