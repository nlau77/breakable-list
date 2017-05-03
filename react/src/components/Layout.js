import React, { Component } from 'react';
import { Link } from 'react-router';


class Layout extends Component  {
  constructor(props){
    super(props)
    this.state = {
      userId : '0'
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

  render() {
    return (
      <div className="small-12 small-centered columns">
        <h3>hello from layout</h3>
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Layout;