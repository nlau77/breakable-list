import React, { Component }  from 'react';
import { Link } from 'react-router';

class UserRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCustomRecipes:[]
    }
  }

  componentDidMount(){
    fetch(`/api/v1/user_recipes`, {credentials: 'same-origin'})
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
          userCustomRecipes: body
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
  render(){
    let userCustomRecipes
      userCustomRecipes = this.state.userCustomRecipes.map(recipe =>{
        return (
          <div className="recipe-links small-12 large-3 medium-4 columns">
              <Link className="" to={`/user_recipe/${recipe.id}`}>{recipe.name}</Link>
          </div>
        )
      })

    return(
      <div className="row">
        <div className="text-center">
          <h3 className="title-header3"><u className="title-header">My Recipes</u></h3>
          <div>
            {userCustomRecipes}
          </div>
        </div>
      </div>
    )
  }
}

export default UserRecipes
