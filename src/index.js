
import store from "./Redux/Store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export let rerenderEntireTree = (state) => {

    ReactDOM.render(<App state={store.getState()}
                         dispatch={store.dispatch.bind(store)}
                         player1RoundScore={store._state.content.game.player1RoundScore}
                         player2RoundScore={store._state.content.game.player2RoundScore}
                         player1StartScore={store._state.content.game.player1StartScore}
                         player2StartScore={store._state.content.game.player2StartScore}







    />, document.getElementById('root'));
};

rerenderEntireTree(store.state);

store.subscribe (rerenderEntireTree);













// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


// addPost("Yo");