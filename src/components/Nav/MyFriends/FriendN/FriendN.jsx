import React from "react";
import classes from "./FriendN.module.css"
import {NavLink} from "react-router-dom";

const FriendN = (props) => {
    let path = "/MyFriends/" + props.id;
  return (
      <div className={classes.friendN}>
              <img src={props.path} alt=""/>
              <NavLink to={path}>{props.name}</NavLink>
      </div>
  )
};

export default FriendN;
