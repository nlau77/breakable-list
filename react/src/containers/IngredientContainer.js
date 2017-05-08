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
    console.log(this.state.amount)
  }

  handleItemChange(event){
      let newIngredient = event.target.value
      this.setState({ ingredient: newIngredient})
      console.log(this.state.ingredient)
  }

  handleSubmit(event){
    event.preventDefault()
    let ingredientBody={
      item:this.state.ingredient,
      amount:this.state.amount
    }
    console.log("you hit the submit button")
  }


  render(){
    return (
      <div>
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
