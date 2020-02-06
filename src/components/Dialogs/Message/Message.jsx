import React from "react";
import profilepic from "../../../images/profileimg.jpg";
import classes from "./Message.module.css"

const Message = (props) => {
    return (
      <div className={classes.message}>
          <img src={profilepic} alt="image"/>
          <textarea name="" id="postMessage" cols="40" rows="10" >{props.message}</textarea>
      </div>



    )
};

export default Message
