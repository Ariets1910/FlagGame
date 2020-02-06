import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from "./components/Nav/nav";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/footer";
import Message from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";

const App = () => {
    return (
        <BrowserRouter>
            <div className="grid">
                <div className="header">
                    <Header/>
                </div>
                <div className="nav">
                    <Nav/>
                </div>
                <div className="content">
                    <Route path="/Profile" component={Content}/>
                    <Route path="/Dialogs" component={Message}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Settings" component={Settings}/>
                </div>
                <div className="footer">
                    <Footer/>
                </div>




            </div>
        </BrowserRouter>
    );
};

export default App;
