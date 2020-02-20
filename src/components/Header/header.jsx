import React from "react";
import classes from "./header.module.css"
import logo from "../../images/logo.png"
import {NavLink} from "react-router-dom";
import profilelogo from "../../images/profileimg.jpg";

const Header = () => {

    return (
        <div className={classes.header}>

            <div className={classes.homeLink}>

                    <NavLink to="FlagGame"><img src={logo} alt="homelogo"/>Home</NavLink>

            </div>
            <div>
                <h1>SMV official website </h1>
            </div>

        </div>

    )
};

export default Header
