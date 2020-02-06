import React from "react";
import profilepic from "../../../images/Natalia.jpg";
import classes from "./Answer.module.css"

const Answer = (props) => {
    return (
        <div className={classes.answer}>
            <textarea name="" id="postMessage" cols="40" rows="10">{props.message}</textarea>
            <img src={profilepic} alt="image"/>
        </div>


    )
};

export default Answer
