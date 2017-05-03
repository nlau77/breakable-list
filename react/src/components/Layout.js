import React from 'react';
import { Link } from 'react-router';

const Layout = (props) => {
  // <div className="small-12 small-centered columns">
  // <h3>This is the layout<h3>
  // </div>
  return (
    <div>
      <h3>hello from layout</h3>
      <div>
        { props.children }
      </div>
    </div>
  )
}

export default Layout;
