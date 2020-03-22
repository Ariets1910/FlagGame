import {combineReducers, createStore} from "redux";
import gameReducer from "./gameReducer";
import dialogsReducer from "./dialogsReducer";
import postFieldReducer from "./postFieldReducer";
import {myFriendsReducer} from "./ myFriendsReducer.";



let reducers = combineReducers ({
    game: gameReducer,
    dialogs: dialogsReducer,
    postField: postFieldReducer,
    myFriends: myFriendsReducer,
});

let store = createStore (reducers);

export default store