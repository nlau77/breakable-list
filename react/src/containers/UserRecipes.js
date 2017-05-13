import React, { Component }  from 'react';
import { Link } from 'react-router';

class UserRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCustomRecipes:[],
      deleteClassName:"hidden",
      message:""
    }
    this.handleDeleteDisplay=this.handleDeleteDisplay.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
    this.fetchRecipesList=this.fetchRecipesList.bind(this)
  }

  handleDeleteDisplay(event){
    console.log("hitting the button")
    if(this.state.deleteClassName==="hidden"){
      this.setState({ deleteClassName:"unhidden"})
    }else{
      this.setState({ deleteClassName:"hidden"})
    }
    this.setState({ message:"" })
  }

  handleDelete(id){
    let recipeId = id
    let recipeBody = {
      recipeId:id
    }
    fetch(`/api/v1/user_recipes/${recipeId}`, { method:'DELETE', credentials: 'same-origin', body: JSON.stringify(recipeBody) })
    .then((response) => response.json())
    .then((responseBody)=>{
      this.setState({ message:responseBody.message })
      this.fetchRecipesList()
    })
  }

  fetchRecipesList(){
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
  componentDidMount(){
    this.fetchRecipesList()
  }
  render(){
    let userCustomRecipes
    let deleteButtonClass=`${this.state.deleteClassName} delete-button`
      userCustomRecipes = this.state.userCustomRecipes.map(recipe =>{
      let handleDelete = () => this.handleDelete(recipe.id)
        return (
          <div className="recipe-links small-12 large-3 medium-4 columns">
            <p><span onClick={handleDelete} className={deleteButtonClass}>x</span>
            <Link className="front-recipe-links" to={`/user_recipe/${recipe.id}`}>{recipe.name}</Link></p>
          </div>
        )
      })

      let message;
      if(this.state.message != ""){
        message=
          <div>{this.state.message}</div>
      }

    return(
      <div className="rows">
        <h3 className="text-center title-header3"><u className="title-header">My Recipes</u></h3>
        <div className="text-center">
          {message}
          <div>
            {userCustomRecipes}
          </div>
        </div>
        <div className="row">
        </div>
        <div className="row">
          <div className="small-6 small-centered small-offset-5 medium-6 medium-offset-5 columns">
            <span className="delete-recipes-button" onClick={this.handleDeleteDisplay}>Delete Recipes</span>
          </div>
        </div>
      </div>
    )
  }
}

export default UserRecipes
