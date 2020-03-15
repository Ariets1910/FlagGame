
import store from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export let rerenderEntireTree = (state) => {

    ReactDOM.render(<App state={store.getState()}
                         changeFlag={store._state.content.game.functions.changeFlag.bind(store)}
                         increaseScoreForFirstPlayer={store._state.content.game.functions.increaseScoreForFirstPlayer.bind(store)}
                         increaseScoreForSecondPlayer={store._state.content.game.functions.increaseScoreForSecondPlayer.bind(store)}
                         decreaseScoreForFirstPlayer={store._state.content.game.functions.decreaseScoreForFirstPlayer.bind(store)}
                         decreaseScoreForSecondPlayer={store._state.content.game.functions.decreaseScoreForSecondPlayer.bind(store)}
                         player1RoundScore={store._state.content.game.player1RoundScore}
                         player2RoundScore={store._state.content.game.player2RoundScore}
                         player1StartScore={store._state.content.game.player1StartScore}
                         player2StartScore={store._state.content.game.player2StartScore}
                         addPost={store._state.content.postField.addPost.bind(store)}
                         updateText={store._state.content.postField.updateText.bind(store)}
                         addNewMessage={store._state.content.dialogs.addNewMessage.bind(store)}
                         updateMessage={store._state.content.dialogs.updateMessage.bind(store)}

    />, document.getElementById('root'));
};

rerenderEntireTree(store.state);

store.subscribe (rerenderEntireTree);













// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


// addPost("Yo");