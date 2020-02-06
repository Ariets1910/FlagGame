import React from "react";
import classes from "./nav.module.css"
import profilelogo from "../../images/profileimg.jpg"
import messageslogo from "../../images/messages.jpg"
import kiselov from "../../images/Kiselevovpad.jpg"
import music from "../../images/music.png"
import settings from "../../images/graysettings.png"
import Adds from "./Adds/Adds";

const Nav = () => {
    return (
        <div className={classes.navBlock}>
            <div className={classes.item}>
                <a href="Profile"><img src={profilelogo} alt=""/>Profile</a>
            </div>
            <div className={classes.item}><a href="Dialogs"><img src={messageslogo} alt=""/>Messages</a></div>
            <div className={classes.item}><a href="News"> <img src={kiselov} alt=""/>News</a></div>
            <div className={classes.item}><a href="Music"><img src={music} alt=""/> Music</a></div>
            <div className={classes.item}><a href="Settings"> <img src={settings} alt=""/>Settings</a></div>
            <Adds/>
            <Adds/>
            <Adds/>
            <Adds/>
        </div>

    )
};

export default Nav
