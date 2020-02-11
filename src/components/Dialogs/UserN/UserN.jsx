import classes from "../../Dialogs/UserN/UserN.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const UserN = (props) => {
    let path = "/Dialogs/" + props.id;
    return (
        <div className={classes.userN + ' ' + classes.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>

    )

};

export default UserN