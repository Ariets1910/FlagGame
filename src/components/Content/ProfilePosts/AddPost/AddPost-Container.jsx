import React from "react";

import {addPostActionCreator, updatePostTextActionCreator} from "../../../../Redux/postFieldReducer";
import AddPost from "./AddPost";



const AddPostContainer = (props) => {



    let state = props.store.getState();



    let onAddPost = (text) => {

        props.store.dispatch (addPostActionCreator(text));
        props.store.dispatch (updatePostTextActionCreator(text))
    };

    let onUpdateText = (text) => {
        props.store.dispatch (updatePostTextActionCreator(text))
    };

    return (
       <AddPost addPost={onAddPost}
                updatePostText={onUpdateText}
                postFieldStartValue={state.postField.postFieldStartValue}/>
    )
};
//
export default AddPostContainer

