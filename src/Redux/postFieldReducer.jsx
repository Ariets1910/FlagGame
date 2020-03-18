const ADD_POST = "addPost"
const UPDATE_POST_TEXT = "updatePostText"
export const addPostActionCreator = (text) => {
    return {type: ADD_POST, postMessage: text}

};

export const updatePostTextActionCreator = (clearText2) => {
    return {type: UPDATE_POST_TEXT, newText: clearText2}

};
const postFieldReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: state.posts.length + 1,
            message: action.postMessage,
            likeCount: 0
        };
        state.posts.push(newPost);
    }

    else if (action.type === UPDATE_POST_TEXT) {
        state.postFieldStartValue = action.newText;
    }
    return state;
};

export default postFieldReducer