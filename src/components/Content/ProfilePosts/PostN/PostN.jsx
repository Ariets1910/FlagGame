import React from 'react';
import classes from "./PostN.module.css"
import avatar from "../../../../images/avatar.jpg"
const PostN = (props) => {
    return (
        <div className={classes.postN}>
            <div>
                <div className={classes.row}>

                    <img src={avatar} alt="image"/>
                    <textarea name="" id="postMessage" cols="auto" rows="auto" >{

                        props.message}</textarea>
                </div>
                <div>
                    <button className={classes.postN}>Like!!</button>
                    <button className={classes.postN}>Dislike!!</button>
                    <button data-id="1" className="like">{props.likeCount}</button>
                </div>

            </div>
        </div>
    )
};

export default PostN