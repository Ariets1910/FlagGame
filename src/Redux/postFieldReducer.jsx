const ADD_POST = "addPost"
const UPDATE_POST_TEXT = "updatePostText"
export const addPostActionCreator = (text) => {
    return {type: ADD_POST, postMessage: text}

};

export const updatePostTextActionCreator = (clearText2) => {
    return {type: UPDATE_POST_TEXT, newText: clearText2}

};

let initialState = {
    posts: [
        {id: 1, message: "Hello! This is my second project!!!", likeCount: "10"},
        {id: 2, message: "It is great!!!", likeCount: "-1"},
        {id: 3, message: "Thank you! Enjoy!", likeCount: "20"},
        {id: 4, message: "With pleasure", likeCount: "100"},
    ],
    postFieldStartValue: "Add some text",
};

const postFieldReducer = (state = initialState, action) => {
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