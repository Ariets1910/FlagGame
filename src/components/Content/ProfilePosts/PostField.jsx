import React from 'react';
import classes from "./PostField.module.css"
import PostN from "./PostN/PostN";
import AddPost from "./AddPost/AddPost";


const PostField = (props) => {



    let postComponents = props.postField.posts.map((post) => {
        return < PostN message={post.message} likeCount={post.likeCount}/>

    });
    return (
        <div className={classes.postField}>
            <AddPost dispatch={props.dispatch} postFieldStartValue={props.postField.postFieldStartValue} dispatch={props.dispatch}/>

            <div>
                {postComponents}
            </div>

        </div>
    )
};

export default PostField