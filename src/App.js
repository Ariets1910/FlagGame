import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from "./components/Nav/nav";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import MyFriends from "./components/Nav/MyFriends/MyFriends";
import {addPost} from "./Redux/State";
import Game from "./components/Content/FlagGame/Game";
import PostField from "./components/Content/ProfilePosts/PostField";
import background from "../src/images/background3.jpg"


const App = (props) => {
    // debugger
    return (
        <HashRouter>

            <div className="grid">

                <div className="header">
                    <Route path="/" render={() => <Header/> } />
                </div>
                <div className="nav">
                    <Nav/>
                </div>

                <div className="content">

                    <Route path="/FlagGame" render={() => <Game/>}/>
                    <Route path="/Profile" render={() =>
                        <PostField posts={props.state.posts} addPost={props.addPost} postFieldStartValue={props.postFieldStartValue}
                                   updateText={props.updateText}
                        />}/>
                    <Route path="/Dialogs"
                           render={() => <Dialogs users={props.state.users}
                                                  messages={props.state.messages}
                                                  messageFieldStartValue={props.state.messageFieldStartValue}
                                                  addNewMessage={props.addNewMessage}
                                                  updateMessage={props.updateMessage} />}/>
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
