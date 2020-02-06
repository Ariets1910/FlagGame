import React from "react";
import classes from "./Content.module.css"
import Game from "./FlagGame/Game";
import PostField from "./ProfilePosts/PostField";

const Content = () => {
    return (
        <div className={classes.content}>
            <Game question="Яка це країна?"/>
            <PostField/>
        </div>

    )
};

export default Content
