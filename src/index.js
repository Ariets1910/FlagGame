import store from "./Redux/redux.store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export let rerenderEntireTree = (state) => {

    ReactDOM.render(<App state={state}
                         store={store}
                         dispatch={store.dispatch.bind(store)}/>,


        document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


// addPost("Yo");