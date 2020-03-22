import React from 'react';
import classes from "./PostField.module.css"
import PostN from "./PostN/PostN";
import AddPost from "./AddPost/AddPost";
import AddPostContainer from "./AddPost/AddPost-Container";


const PostField = (props) => {



    let postComponents = props.postField.posts.map((post) => {
        return < PostN message={post.message} likeCount={post.likeCount}/>

    });
    return (
        <div className={classes.postField}>
            <AddPostContainer store={props.store}/>}/>

            <div>
                {postComponents}
            </div>

        </div>
    )
};

export default PostField