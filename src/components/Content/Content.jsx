import React from "react";
import classes from "./Content.module.css"
import Game from "./FlagGame/Game";
import PostField from "./ProfilePosts/PostField";


const Content = (props) => {


    return (
        <div className={classes.content}>

            <Game question="Якв це країна?"/>
            <PostField posts={props.posts}/>

        </div>

    )
};

export default Content
