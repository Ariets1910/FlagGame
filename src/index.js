import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let users = [
    {id: 1, name: "Natalia"},
    {id: 2, name: "Genias"},
    {id: 3, name: "Igor"},
    {id: 4, name: "Andriy"},
    {id: 5, name: "Michael"},
    {id: 6, name: "Roma"},
];
let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hi, hello"},
    {id: 3, message: "How is your day?"},
    {id: 4, message: "Fine, for sure"},
    {id: 5, message: "Nice to hear that!!!"},
    {id: 6, message: "I love react!!"},
];
let posts = [
    {id: 1, message: "Hello! This is my second project!!!", likeCount: "10"},
    {id: 2, message: "It is great!!!", likeCount: "-1"},
    {id: 3, message: "Thank you! Enjoy!", likeCount: "20"},
    {id: 4, message: "With pleasure", likeCount: "100"},
];
ReactDOM.render(<App users={users} messages={messages} posts={posts} question="Яка це країна?"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

