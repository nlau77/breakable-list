import React, { Component }  from 'react';
import { Link } from 'react-router';

class UserRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount(){
    let recipeId = this.props.params.id;
    fetch(`api/v1/user_recipes/${recipeId}`, {credentials: 'same-origin'})
      .then((response) => response.json())
      .then((responseData) =>{
        this.setState({ recipe : responseData })
      })
  }
  render(){
    return (
      <div>
        <h3>recipes container </h3>
      </div>
    )
  }
}

export default UserRecipes
