import React from 'react';
import { Link } from 'react-router';

const UserListTile = (props) => {
  return (
    <div className="small-12 medium-6 small-centered columns">
      <p onClick={props.handleListId} className="text-center old-lists">{props.title}</p>
    </div>
  )
}

export default UserListTile
