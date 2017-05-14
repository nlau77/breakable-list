import React, { Component } from 'react';
import { Link } from 'react-router';
import IngredientListTile from '../components/IngredientListTile'
import UserListTile from '../components/UserListTile'

class DisplayList extends Component {
  constructor(props){
    super(props)
    this.state ={
      list: {},
      ingredients: [],
      selected_list: "",
      recipes:[],
      oldLists:[],
      selectedIngredients:[]
    }
    this.handleClickIngredient=this.handleClickIngredient.bind(this)
    this.handleDisplayNewList=this.handleDisplayNewList.bind(this)
  }


  handleClickIngredient(id){
    let updateSelectedIngredients = this.state.selectedIngredients
      if(updateSelectedIngredients.includes(id)){
        let indexOfItem = updateSelectedIngredients.indexOf(id)
        updateSelectedIngredients.splice(indexOfItem, 1)
        this.setState({ selectedIngredients: updateSelectedIngredients})
      }else{
        updateSelectedIngredients.push(id)
        this.setState({ selectedIngredients: updateSelectedIngredients})
      }
  }

  handleDisplayNewList(id){
    fetch(`/api/v1/user_lists/${id}`, {credentials: 'same-origin'})
    .then((response) => response.json())
    .then((responseData) =>{
      this.setState({
        list: responseData.list,
        ingredients: responseData.ingredients,
        recipes: responseData.recipes,
        selectedIngredients: []
      })
    })
  }

  componentDidMount(){
    fetch(`/api/v1/user_lists/`, {credentials: 'same-origin'})
      .then((response) => response.json())
      .then((responseData) =>{
        this.setState({
          list: responseData.list,
          ingredients: responseData.ingredients,
          recipes: responseData.recipes,
          oldLists: responseData.oldLists
        })
      })
  }

  render(){

    let ingredientsList = this.state.ingredients.map(ingredient => {
      let handleClick = () => this.handleClickIngredient(ingredient.id)
      let ingredientClassName = "unselected-ingredient text-center"
      if(this.state.selectedIngredients.includes(ingredient.id)){
        ingredientClassName="selected-ingredient text-center"
      }
      return(
        <IngredientListTile
          key={ingredient.id}
          name={ingredient.name}
          handleClick={handleClick}
          className={ingredientClassName}
        />
      )
    })

    let selectedRecipes = this.state.recipes.map(recipe =>{
      return (
        <div className="small-12 medium-6 text-center columns">
          <p><Link className="" to={`/user_recipe/${recipe.id}`}>{recipe.name}</Link></p>
        </div>
      )
    })

    let oldLists = this.state.oldLists.map(list =>{
      let handleListId = () => this.handleDisplayNewList(list.id)
      return (
        <UserListTile
        key={list.id}
        title={list.title}
        handleListId={handleListId}
        />
      )
    })
    return(
      <div className="rows">
        <h3 className="text-center title-header3"><u className="title-header">Grocery List</u></h3>
        <div className="columns small-12 medium-6">
          <h5 className="ingredients-list-header text-center">{this.state.list.title}</h5>
          <p className="text-center grocerylist-subheader">Items to pick up:</p>
          <div className="rows grocery-list-ingredient-font">
            {ingredientsList}
          </div>
        </div>
        <div className=" columns small-12 medium-6">
          <h5 className="list-header text-center">Selected Recipes</h5>
          <div className="rows grocery-list-font">
            {selectedRecipes}
          </div>
          <div className="row">
          </div>
          <div className="rows">
            <h5 className="list-header text-center">Previous Grocerylists</h5>
            <div className="rows grocery-list-font">
              {oldLists}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DisplayList
