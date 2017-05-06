import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Layout from '../components/Layout';
import UserRecipes from './UserRecipes';
import RecipeContainer from './RecipeContainer';
import CreateRecipe from './CreateRecipe';
import ListContainer from './ListContainer';
import DisplayList from './DisplayList';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render (){
    return (
      <div>
        <Router history={browserHistory}>
          <Route path = '/' component= {Layout} >
            <IndexRoute component= {UserRecipes} />
            <Route path='/user_recipe/:id' component= {RecipeContainer} />
            <Route path='/user_recipes/new'component = {CreateRecipe} />
            <Route path='/user_lists/new' component = {ListContainer} />
            <Route path='/user_list' component = {DisplayList} />
          </Route>
        </Router>
      </div>
    )
  }
}

export default App;
