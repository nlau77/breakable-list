import React, { Component }  from 'react';
import { Link } from 'react-router';

class IngredientFormContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      ingredient: "",
      amount: ""
    }
    this.handleAmountChange=this.handleAmountChange.bind(this)
    this.handleItemChange=this.handleItemChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleAmountChange(event){
    let newAmount = event.target.value
    this.setState({ amount : newAmount })
  }

  handleItemChange(event){
      let newIngredient = event.target.value
      this.setState({ ingredient: newIngredient})
  }

  handleSubmit(event){
    event.preventDefault()
    let recipeId = this.props.recipeId;
    let ingredientBody={
      recipeId:recipeId,
      item:this.state.ingredient,
      amount:this.state.amount
    }
    fetch('/api/v1/ingredients', { method:'POST', credentials: 'same-origin', body: JSON.stringify(ingredientBody) })
    .then((response)=>{
      // function passed down from RecipeContainer to force rerender on RecipeContainer
      this.setState({
        ingredient:"",
        amount:""
      })
      this.props.fetchRecipeInfo()
    })
  }

  render(){
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <div className="small-4 columns">
            <label>Amount:</label>
            <input type='text' value={this.state.amount} onChange={this.handleAmountChange}/>
          </div>
          <div className="small-8 columns">
            <label>Item:</label>
            <input type='text' value={this.state.ingredient} onChange={this.handleItemChange}/>
          </div>
          <div className="small-offset-4">
            <input type="submit" className="button expand" value="Add"/>
          </div>
        </form>
      </div>
    )
  }
}

export default IngredientFormContainer
