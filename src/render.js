import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addNewMessage, addPost, updateMessage, updateText} from "./Redux/State";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
                         addPost={addPost}
                         updateText={updateText}
                         addNewMessage={addNewMessage}
                         updateMessage={updateMessage}/>, document.getElementById('root'));
};




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// addPost("Yo");