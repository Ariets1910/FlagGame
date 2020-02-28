import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from "./components/Nav/nav";

import Footer from "./components/Footer/footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import MyFriends from "./components/Nav/MyFriends/MyFriends";

import Game from "./components/Content/FlagGame/Game";
import PostField from "./components/Content/ProfilePosts/PostField";



const App = (props) => {


    return (
        <HashRouter>

            <div className="grid">

                <div className="header">
                    <Route path="/" render={() => <Header/>}/>
                </div>
                <div className="nav">
                    <Nav/>
                </div>

                <div className="content">

                    <Route path="/FlagGame" render={() => <Game
                        game={props.state.content.game}
                        increaseScoreForFirstPlayer={props.increaseScoreForFirstPlayer}
                        increaseScoreForSecondPlayer={props.increaseScoreForSecondPlayer}
                        player1StartScore={props.state.player1StartScore}
                        player2StartScore={props.state.player2StartScore}
                        player1RoundScore={props.state.player1RoundScore}
                        player2RoundScore={props.state.player2RoundScore}
                        decreaseScoreForFirstPlayer={props.decreaseScoreForFirstPlayer}
                        decreaseScoreForSecondPlayer={props.decreaseScoreForSecondPlayer}
                        // changeFlag={props.changeFlag}
                    />}/>
                    <Route path="/Profile" render={() =>
                        <PostField posts={props.state.content.posts}
                                   addPost={props.state.content.addPost}
                                   postFieldStartValue={props.state.content.postFieldStartValue}
                                   updateText={props.state.content.updateText}
                        />}/>
                    <Route path="/Dialogs"
                           render={() => <Dialogs users={props.state.dialogs.users}
                                                  messages={props.state.dialogs.messages}
                                                  messageFieldStartValue={props.state.dialogs.messageFieldStartValue}
                                                  addNewMessage={props.state.dialogs.addNewMessage}
                                                  updateMessage={props.state.dialogs.updateMessage}/>}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/MyFriends" render={() => <MyFriends myFriends={props.state.myFriends}/>}/>
                    <Route path="/Settings" component={Settings}/>

                </div>
                <div className="footer">
                    <Footer/>
                </div>


            </div>
        </HashRouter>
    );
};

export default App;
