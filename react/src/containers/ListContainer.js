import React, { Component }  from 'react';
import { Link } from 'react-router';
import ListTile from '../components/ListTile'

class ListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      userRecipes:[],
      selectedRecipes:[],
      listTitle: ""
    }
  this.handleClickRecipe = this.handleClickRecipe.bind(this)
  this.handleTitleChange = this.handleTitleChange.bind(this)
  this.handleSaveList = this.handleSaveList.bind(this)
  }

  handleClickRecipe(id){
    console.log("selected id: " + id)
    let updateSelectedRecipes = this.state.selectedRecipes
      if(updateSelectedRecipes.includes(id)){
        let indexOfItem = updateSelectedRecipes.indexOf(id)
        updateSelectedRecipes.splice(indexOfItem, 1)
        this.setState({ selectedRecipes: updateSelectedRecipes})
        // console.log("true")
      }else{
        // console.log("false")
        updateSelectedRecipes.push(id)
        this.setState({ selectedRecipes: updateSelectedRecipes})
      }

    console.log(this.state.selectedRecipes)
  }

  handleTitleChange(event){
    let newTitle= event.target.value
    this.setState({ listTitle: newTitle})
    console.log(this.state.listTitle)
  }

  handleSaveList(event){
    console.log("trigger the save list")
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
        let recipeClassName = ""
        let handleClick = () => this.handleClickRecipe(recipe.id)
        if(this.state.selectedRecipes.includes(recipe.id)){
          recipeClassName="selected-recipe"
        }
        return (
          <div className="small-12 large-3 medium-4 columns">
            <ListTile
              key={recipe.id}
              id={recipe.id}
              name={recipe.name}
              handleClick={handleClick}
              recipeClassName={recipeClassName}
            />
          </div>
        )
      })

    return(
      <div>
        <div className="row">
          <div className="text-center">
            <h3>Select Your Recipes </h3>
            <div>
              {userRecipes}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="small-12 medium-6 columns text-center">
            <h7>Give your list a title(optional)</h7>
            <input onChange={this.handleTitleChange} />
          </div>
        </div>
        <div>
          <button onClick={this.handleSaveList}>Save List!</button>
        </div>
      </div>
    )
  }
}

export default ListContainer;
