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
import store from "./Redux/Store";


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
                        player1RoundScore={props.player1RoundScore}
                        player2RoundScore={props.player2RoundScore}
                        player1StartScore={props.player1StartScore}
                        player2StartScore={props.player2StartScore}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path="/Profile" render={() =>
                        <PostField
                            postField={props.state.content.postField}
                            dispatch={props.dispatch}
                        />}/>
                    <Route path="/Dialogs"
                           render={() => <Dialogs
                               dialogs={props.state.content.dialogs}
                               dispatch={props.dispatch}
                           />}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/MyFriends" render={() => <MyFriends myFriends={props.state.content.myFriends}/>}/>
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
