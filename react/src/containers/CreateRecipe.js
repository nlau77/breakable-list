import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import RecipeForm from '../components/RecipeForm'

class CreateRecipe extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      instructions: '',
      ingredients: '',
      messages: []
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    // this.handleInstructionsChange = this.handleInstructionsChange.bind(this)
    // this.handleIngredientsChange = this.handleIngredientsChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event){
      let newName = event.target.value
      this.setState({ name: newName})
  }

  handleSubmit(event){
    event.preventDefault()
    let recipeBody = {
      name:this.state.name,
      instructions: this.state.instructions,
      ingredients: this.state.ingredients
    }

    fetch('/api/v1/user_recipes', { method:'POST', credentials: 'same-origin', body: JSON.stringify(recipeBody) })
    .then(response => {
      let parsed = response.json();
      return parsed;
    }).then(command =>{
      if(command.messages){
        this.setState({ messages: command.messages })
      }else {
        browserHistory.push(`/user_recipe/${command.id}`)
      }
    })
  }

  render(){
    // handleInstructionsChange={this.handleInstructionsChange}
    // handleIngredientsChange={this.handleIngredientsChange}
    // instructions={this.state.instructions}
    // ingredients={this.state.ingredients}


    let errors = this.state.messages.map (error =>{
      return (
        <p className="error-message text-center">{error}</p>
      )
    })

    return(
      <div className="rows">
        <h3 className="text-center title-header3"><u className="title-header">New Recipe</u></h3>
          {errors}
        <div className="columns small-8 large-4 medium-6 small-centered new-recipe-form">
          <RecipeForm
            handleNameChange={this.handleNameChange}
            name={this.state.name}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    )
  }
}

export default CreateRecipe;
