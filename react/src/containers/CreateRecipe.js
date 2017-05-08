import React, { Component } from 'react';
import { Link } from 'react-router';
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
    this.handleInstructionsChange = this.handleInstructionsChange.bind(this)
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event){
      let newName = event.target.value
      this.setState({ name: newName})
  }

  handleInstructionsChange(event){
      let newInstructions = event.target.value
      this.setState({ instructions: newInstructions})
  }

  handleIngredientsChange(event){
      let newIngredients = event.target.value
      this.setState({ ingredients: newIngredients})
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
        window.location=`/user_recipe/${command.id}`
      }
    })
  }

  render(){
    let errors = this.state.messages.map (error =>{
      return (
        <p className="error-message text-center">{error}</p>
      )
    })

    return(
      <div className="rows">
        <h3 className="text-center">Recipe Name</h3>
          {errors}
        <div className="columns small-8 small-centered">
          <RecipeForm
          handleNameChange={this.handleNameChange}
          handleInstructionsChange={this.handleInstructionsChange}
          handleIngredientsChange={this.handleIngredientsChange}
          name={this.state.name}
          instructions={this.state.instructions}
          ingredients={this.state.ingredients}
          handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    )
  }
}

export default CreateRecipe;
