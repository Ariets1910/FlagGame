import React from "react";
import profilepic from "../../../images/Natalia.jpg";
import classes from "./Answer.module.css"

const Answer = (props) => {
    return (
        <div className={classes.answer}>
            <div className={classes.answerText}>
                {props.message}
            </div>
            <div>
                <img src={profilepic} alt="image"/>
            </div>

        </div>


    )
};

export default Answer
