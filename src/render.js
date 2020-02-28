import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {



    decreaseScoreForFirstPlayer, decreaseScoreForSecondPlayer,
    increaseScoreForFirstPlayer, increaseScoreForSecondPlayer,


} from "./Redux/State";

export let rerenderEntireTree = (state) => {

    ReactDOM.render(<App state={state}
                         increaseScoreForFirstPlayer={increaseScoreForFirstPlayer}
                         increaseScoreForSecondPlayer={increaseScoreForSecondPlayer}
                         decreaseScoreForFirstPlayer={decreaseScoreForFirstPlayer}
                         decreaseScoreForSecondPlayer={decreaseScoreForSecondPlayer}

    />, document.getElementById('root'));
};




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// addPost("Yo");