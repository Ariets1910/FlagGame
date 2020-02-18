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


const App = (props) => {

    return (
        <HashRouter>

            <div className="grid">
                <div className="header">
                    <Header/>
                </div>
                <div className="nav">
                    <Nav/>
                </div>

                <div className="content">
                    <Route path="/Profile" render={() => <Content posts={props.state.posts}/>}/>
                    <Route path="/Dialogs" render={() => <Dialogs users={props.state.users} messages={props.state.messages}/>}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/MyFriends" render={() => <MyFriends myFriends={props.state.myFriends}/>}/>
                    {/*<Route path="/MyFriends" component={MyFriends}/>*/}
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
