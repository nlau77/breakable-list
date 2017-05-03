import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Layout from '../components/Layout';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userId: '0'
    }
    this.getUserData=this.getUserData.bind(this);
  }

  getUserData(){
    fetch(`api/v1/users`, {credentials: 'same-origin'})
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
          userId: body.id
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
  componentDidMount(){
    this.getUserData()
  }
  render (){
    // <div>
    // <h1>App is working</h1>
    // </div>
    // <Route path = `/users/${this.state.id}` component={Layout}>
    return (
      <Router history={browserHistory}>
        <Route path = '/' component= {Layout}>
        </Route>
      </Router>
    )
  }
}

export default App;
