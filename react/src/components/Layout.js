import React from 'react';
import { Link } from 'react-router';

const Layout = (props) => {

 return(
   <div>
     <div className="row image-row">
        <div className="columns text-center title header-image">
        </div>
      </div>
     <div className="rows react-component-background">
        <div className="small-12 small-centered columns layout-bar">
           <Link className='layout-button' to='/'> My Recipes</Link>
           <Link className='layout-button' to='/user_recipes/new'> Submit Recipe</Link>
           <Link className='layout-button' to='/user_lists/new'> Make List</Link>
           <Link className='layout-button' to='/user_list'> See My link</Link>
        </div>
        <div className="rows">
          { props.children }
        </div>
     </div>
     <div className="react-buttom-padding">
     </div>
   </div>
 )
}

export default Layout;
