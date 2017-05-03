import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Layout from '../components/Layout';
import UserRecipes from './UserRecipes'


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
          </Route>
        </Router>
      </div>
    )
  }
}

export default App;
