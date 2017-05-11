import React from 'react';
import { Link } from 'react-router';

const Layout = (props) => {

 return(
   <div>
     <div className="row image-row">
        <div className="columns text-center title">
        </div>
      </div>
     <div className="rows text-center react-component-background layout-links-bar">
       <div className="small-6 medium-3 large-3 text-centered columns layout-header">
          <Link className='' to='/'> My Recipes</Link>
        </div>
        <div className="small-6 medium-3 large-3 text-centered layout-header columns">
          <Link className='' to='/user_recipes/new'> New Recipe</Link>
        </div>
        <div className="small-6 medium-3 large-3 text-centered layout-header columns">
          <Link className='' to='/user_lists/new'>New Grocery List</Link>
        </div>
        <div className="small-6 medium-3 large-3 text-centered layout-header columns">
          <Link className='' to='/user_list'>Vew Lists</Link>
        </div>
      </div>


      <div className="rows children-props">
        { props.children }
      </div>

     <div className="react-buttom-padding">
     </div>
   </div>
 )
}

export default Layout;
