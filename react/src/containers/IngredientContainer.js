import React, { Component }  from 'react';
import { Link } from 'react-router';

class IngredientContainer extends Component {
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
      window.location=`/user_recipe/${this.props.recipeId}`
    })
    console.log("you hit the submit button")
  }


  render(){
    return (
      <div className="hidden">
        <p>Hello from ingredient container</p>
        <form onSubmit={this.handleSubmit}>
          <label>Amount:</label>
          <input type='text' value={this.state.amount} onChange={this.handleAmountChange}/>

          <label>Item:</label>
          <input type='text' value={this.state.ingredient} onChange={this.handleItemChange}/>
          <input type="submit" value="+"/>
        </form>
      </div>
    )
  }
}

export default IngredientContainer
