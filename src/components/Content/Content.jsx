import React from "react";
import classes from "./Content.module.css"
import PostField from "./ProfilePosts/PostField";
import Game from "./FlagGame/Game";



const Content = (props) => {


    return (
        <div className={classes.content}>

            <Game/>
            <PostField posts={props.posts} addPost={props.addPost} postFieldStartValue={props.postFieldStartValue}
                       updateText={props.updateText}

            />


        </div>

    )
};

export default Content
