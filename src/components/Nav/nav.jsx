import React from "react";
import classes from "./nav.module.css"
const Nav = () => {
    return (
        <div className={classes.navBlock}>
            <div><a>Profile</a></div>
            <div><a>Messages</a></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Settings</a></div>
        </div>

    )
};

export default Nav
