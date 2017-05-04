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
  }

  render(){
    return(
      <div className="rows">
        <div className="columns small-8 small-centered">
          <RecipeForm />
        </div>
      </div>
    )
  }
}

export default CreateRecipe;
