import React, { Component }  from 'react';
import { Link } from 'react-router';
import ListTile from '../components/ListTile'

class ListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      userRecipes:[],
      selectedRecipes:[]
    }
  this.handleClickRecipe=this.handleClickRecipe.bind(this)
  }

  handleClickRecipe(id){
    console.log("selected id" + id)
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
          userRecipes: body
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
  render(){
    let userRecipes;
      userRecipes = this.state.userRecipes.map(recipe =>{
        let handleClick = () => this.handleClickRecipe(recipe.id)
        return (
          <div>
            <ListTile
              key={recipe.id}
              id={recipe.id}
              name={recipe.name}
              handleClick={handleClick}
            />
          </div>
        )
      })

    return(
      <div className="row">
        <div className="test-div text-center">
        </div>

        <div className="small-12 columns text-center">
          <h3>Select Your Recipes </h3>
          <div>
            {userRecipes}
          </div>
        </div>
      </div>
    )
  }
}

export default ListContainer;
