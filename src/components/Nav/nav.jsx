import React from "react";
import classes from "./nav.module.css"
import profilelogo from "../../images/profileimg.jpg"
import messageslogo from "../../images/messages.jpg"
import kiselov from "../../images/Kiselevovpad.jpg"
import music from "../../images/music.png"
import settings from "../../images/graysettings.png"
import Adds from "./Adds/Adds";
import {NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <div className={classes.navBlock}>
            <div className={classes.item}>
                <NavLink to="Profile" activeClassName={classes.active}><img src={profilelogo} alt=""/>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="Dialogs" activeClassName={classes.active}><img src={messageslogo}
                                                                            alt=""/>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="News" activeClassName={classes.active}> <img src={kiselov} alt=""/>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="Music" activeClassName={classes.active}><img src={music} alt=""/> Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="Settings" activeClassName={classes.active}> <img src={settings} alt=""/>Settings</NavLink>
            </div>
            <Adds/>
            <Adds/>
            <Adds/>
            <Adds/>
        </div>

    )
};

export default Nav
