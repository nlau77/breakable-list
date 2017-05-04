import React, { Component } from 'react';
import { Link } from 'react-router';
import RecipeForm from '../components/RecipeForm'

class CreateRecipe extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      instructions: '',
      ingredients: ''
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

  }

  render(){
    return(
      <div className="rows">
        <h3 className="text-center">Submit A Recipe!</h3>
        <div className="columns small-8 small-centered">
          <RecipeForm
          handleNameChange={this.handleNameChange}
          handleInstructionsChange={this.handleInstructionsChange}
          handleIngredientsChange={this.handleIngredientsChange}
          name={this.state.name}
          instructions={this.state.instructions}
          ingredients={this.state.ingredients}
          />
        </div>
      </div>
    )
  }
}

export default CreateRecipe;
