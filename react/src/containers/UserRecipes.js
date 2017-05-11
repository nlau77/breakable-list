import React, { Component }  from 'react';
import { Link } from 'react-router';

class UserRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCustomRecipes:[],
      deleteClassName:"hidden"
    }
    this.handleDeleteDisplay=this.handleDeleteDisplay.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
  }

  handleDeleteDisplay(){
    console.log("hitting the button")
    if(this.state.deleteClassName==="hidden"){
      this.setState({ deleteClassName:"unhidden"})
    }else{
      this.setState({ deleteClassName:"hidden"})
    }
  }

  handleDelete(id){

    console.log(id)
    // some post deleting function
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

    return(
      <div className="row">
        <div className="text-center">
          <h3 className="title-header3"><u className="title-header">My Recipes</u></h3>
          <div>
            {userCustomRecipes}
          </div>
        </div>
        <div className="row">
        </div>
        <div className="row">
          <div className="small-6 small-offset-4 medium-6 medium-offset-5 columns">
            <span className="delete-recipes-button" onClick={this.handleDeleteDisplay}>Delete Recipes</span>
          </div>
        </div>
      </div>
    )
  }
}

export default UserRecipes
