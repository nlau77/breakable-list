import React, { Component } from 'react';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './App';


class GetUserId extends Component {
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
    // <App userId={this.state.userId} />

    return (
      <div>
        < App userId={this.state.userId} />
      </div>
    )
  }
}

export default GetUserId;
