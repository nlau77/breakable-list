import React, { Component } from 'react';
import { Link } from 'react-router';
import IngredientTile from '../components/IngredientTile'
import IngredientFormContainer from './IngredientFormContainer'
import AmountTile from '../components/AmountTile'
import InstructionTile from '../components/InstructionTile'
import InstructionForm from '../components/InstructionForm'

class UserRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
      ingredients: [],
      recipeAmounts: [],
      instructions:[],
      newInstruction: ""
    }
    this.handleStepChange=this.handleStepChange.bind(this);
    this.handleInstructionSubmit=this.handleInstructionSubmit.bind(this);
    this.fetchRecipeInfo=this.fetchRecipeInfo.bind(this);
  }

  handleStepChange(event){
    let updatedStep = event.target.value
    this.setState({ newInstruction : updatedStep })
  }

  handleInstructionSubmit(event){
    event.preventDefault();
    let recipeId = this.props.params.id;
    let instructionBody={
      recipeId: recipeId,
      instruction: this.state.newInstruction
    }
    fetch('/api/v1/instructions', { method:'POST', credentials: 'same-origin', body: JSON.stringify(instructionBody) })
    .then((response)=>{
      this.setState({
        newInstruction:""
      })
      this.fetchRecipeInfo()
    })
  }
  fetchRecipeInfo(){
    let recipeId = this.props.params.id;
    fetch(`/api/v1/user_recipes/${recipeId}`, {credentials: 'same-origin'})
    .then((response) => response.json())
    .then((responseData) =>{
      this.setState({
        recipe : responseData.recipe,
        ingredients : responseData.ingredients,
        recipeAmounts : responseData.amounts,
        instructions : responseData.instructions
      })
    })
  }

  componentDidMount(){
    this.fetchRecipeInfo();
  }
  render(){
    let stepNumber = 0;
    let instructionList = this.state.instructions.map(instruction =>{
      stepNumber ++;
      return(
        <InstructionTile
          stepNumber={stepNumber}
          key={instruction.id}
          step={instruction.step}
        />
      )
    })
    let ingredientList = this.state.ingredients.map(ingredient => {
      return(
        <IngredientTile
          key={ingredient.id}
          name={ingredient.name}
          />
      )
    })
    let amountList = this.state.recipeAmounts.map(ingredient =>{
      return(
        <AmountTile
         key={ingredient.id}
         amount={ingredient.amount}
        />
      )
    })

    return (
      <div className="rows">
        <h3 className="text-center">{this.state.recipe.name} </h3>
        <div className="small-12 medium-6 columns">
          <h5 className="recipe-header">Instructions</h5>
          <div className="rows">
            <div className="columns small-12">
              <ul>
                {instructionList}
              </ul>
            </div>
            <div>
              <InstructionForm
                handleStepChange={this.handleStepChange}
                handleInstructionSubmit={this.handleInstructionSubmit}
                newInstruction={this.state.newInstruction}
                />
            </div>
          </div>
        </div>

        <div className= "small-12 medium-6 columns">
          <h5 className="recipe-header">Ingredients</h5>
          <div className="rows">
            <div className="columns small-6">
              <ul>
                {amountList}
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
            <IngredientFormContainer
            recipeId={this.props.params.id}
            fetchRecipeInfo={this.fetchRecipeInfo}
            />
           </div>
         </div>
      </div>
    )
  }
}

export default UserRecipes
