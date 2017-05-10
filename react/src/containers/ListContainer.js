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
      }else{
        updateSelectedRecipes.push(id)
        this.setState({ selectedRecipes: updateSelectedRecipes})
      }

    // console.log(this.state.selectedRecipes)
  }

  handleTitleChange(event){
    let newTitle= event.target.value
    this.setState({ listTitle: newTitle})
    console.log(this.state.listTitle)
  }

  handleSaveList(event){
    event.preventDefault()
    let listBody = {
      recipes:this.state.selectedRecipes,
      title:this.state.listTitle
    }

    fetch('/api/v1/user_lists', { method:'POST', credentials: 'same-origin', body: JSON.stringify(listBody) })
    .then(response => {
      let parsed = response.json();
      return parsed;
    }).then(command =>{
      if(command.messages){
        this.setState({ messages: command.messages })
      }else {
        console.log("it got to here")
        window.location=`/user_list`
      }
    })
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
        let recipeClassName = "unselected-recipe"
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
        <div className="rows">
          <div className="text-center">
            <h3 className="title-header3"><u className="select-recipes-header">Select Your Recipes</u></h3>
              {userRecipes}
          </div>
        </div>
        <div className="row">
        </div>
        <div className="rows">
          <div className="small-8 small-offset-2 medium-offset-4 columns">
            <label className="optional">Give your list a title (optional)</label>
            <input onChange={this.handleTitleChange} /><br />
            <button className="button" onClick={this.handleSaveList}>Save List!</button>
          </div>
          <div className="medium-3 columns">

          </div>
        </div>
      </div>
    )
  }
}

export default ListContainer;
