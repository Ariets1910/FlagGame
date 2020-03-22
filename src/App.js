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
                        game={props.state.game}
                        player1RoundScore={props.state.game.player1RoundScore}
                        player2RoundScore={props.state.game.player2RoundScore}
                        player1StartScore={props.state.game.player1StartScore}
                        player2StartScore={props.state.game.player2StartScore}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path="/Profile" render={() =>
                        <PostField
                            store={props.store}
                        />}/>
                    <Route path="/Dialogs"
                           render={() => <Dialogs
                               store={props.store}

                           />}/>
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
