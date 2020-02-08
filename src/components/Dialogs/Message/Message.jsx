import React from "react";
import profilepic from "../../../images/profileimg.jpg";
import classes from "./Message.module.css"

const Message = (props) => {
    return (
        <div className={classes.message}>
            <div>
                <img src={profilepic} alt="image"/>
            </div>
            <div className={classes.messageText}>
                {props.message}
            </div>


        </div>



    )
};

export default Message
