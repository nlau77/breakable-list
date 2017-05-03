import React, { Component }  from 'react';
import { Link } from 'react-router';

class UserRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
    fetch(`api/v1/user_recipes`, {credentials: 'same-origin'})
      .then(response =>{
        if (response.ok){
          return response;
        }else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body=> {
        this.setState({
          userRecipes: body.recipes
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
  render(){
    return(
      <div className="row">
        <div className="small-12 columns text-center">
          <h3>My Recipes</h3>
        </div>
      </div>
    )
  }
}

export default UserRecipes
