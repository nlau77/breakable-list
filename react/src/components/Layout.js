import React from 'react';
import { Link } from 'react-router';

const Layout = (props) => {
 return(
   <div className="rows">
      <div className="small-12 small-centered columns layout-bar">
         <Link className='layout-button' to='/'> My Recipes</Link>
         <Link className='layout-button' to='/user_recipes/new'> Submit Recipe</Link>
         <Link className='layout-button' to='/user_lists/new'> Make List</Link>
      </div>
      <div className="rows">
        { props.children }
      </div>
   </div>
 )
}

export default Layout;
