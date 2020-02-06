import React from "react";
import classes from "./header.module.css"
import logo from "../../images/logo.png"

const Header = () => {
    return (
        <div className={classes.header}>
            <div>
                <img src={logo} alt=""/>
            </div>
            <div>
                <h1>SMV official website </h1>
            </div>

        </div>

    )
};

export default Header
