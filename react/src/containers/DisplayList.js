import React, { Component } from 'react';
import { Link } from 'react-router';
// probably import some tile

class DisplayList extends Component {
  constructor(props){
    super(props)
    this.state ={
      recipe: {},
      ingredients: []

    }
  }


  render(){
    return(
      <div>
        <h5 className="text-center">Grocery List</h5>
        <div className="row">
          <div className="columns small-12 medium-7 large-5" >
            <h3>display list working</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default DisplayList
