import React from 'react';
import { Link } from 'react-router';

const Layout = (props) => {

 return(
   <div>
     <div className="row image-row">
        <div className="columns text-center title header-image">
        </div>
      </div>

     <div className="rows react-component-background layout-links-bar">
       <div className="small-6 medium-3 large-3 text-centered columns">
          <Link className='' to='/'> My Recipes</Link>
        </div>
        <div className="small-6 medium-3 large-3 text-centered columns">
          <Link className='' to='/user_recipes/new'> New Recipe</Link>
        </div>
        <div className="small-6 medium-3 large-3 text-centered columns">
          <Link className='' to='/user_lists/new'> Make List</Link>
        </div>
        <div className="small-6 medium-3 large-3 text-centered columns">
          <Link className='' to='/user_list'> My Lists</Link>
        </div>
      </div>


      <div className="rows">
        { props.children }
      </div>

     <div className="react-buttom-padding">
     </div>
   </div>
 )
}

export default Layout;
