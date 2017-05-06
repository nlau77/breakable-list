import React, { Component } from 'react';
import { Link } from 'react-router';
// probably import some tile

class DisplayList extends Component {
  constructor(props){
    super(props)
    this.state ={
      recipe: {},
      ingredients: []
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
        <li>{ingredient.name}</li>
      )
    })

    return(
      <div>
        <h5 className="text-center">Grocery List</h5>
        <div className="row">
        <h3>{this.state.recipe.title}</h3>
          <div className="columns small-12 medium-7 large-5" >
            <ul>
              {ingredientsList}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default DisplayList
