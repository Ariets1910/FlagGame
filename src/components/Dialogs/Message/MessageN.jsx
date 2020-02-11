import React from "react";
import profilepic from "../../../images/profileimg.jpg";
import classes from "./MessageN.module.css"

const MessageN = (props) => {

        return (
            <div className={classes.messageN}>
                {props.message}
            </div>
        )

};

export default MessageN
