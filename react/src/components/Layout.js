import React from 'react';
import { Link } from 'react-router';

const Layout = (props) => {
 return(
   <div>
    <div className="small-12 small-centered columns">
       <Link className='button' to='/'> Home </Link>
       <Link className='button' to='/'> My Recipes</Link>
    </div>
      { props.children }
   </div>
 )
}

export default Layout;
