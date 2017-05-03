import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Layout from '../components/Layout';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render (){
    // <Route path = `/users/${this.state.id}` component={Layout}>
    // <Layout userId={this.state.userId} />
    return (
      <div>
        <h1>Hello #{this.props.userId}</h1>
        <Router history={browserHistory}>
          <Route path = '/' component= {Layout} >
          </Route>
        </Router>

      </div>
    )
  }
}

export default App;
