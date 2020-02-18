import classes from "../../Dialogs/UserN/UserN.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

// <img src={require('../assets/imgs/people/' + this.props.name + '.png')}


const UserN = (props) => {
    let path = "/Dialogs/" + props.id;
    return (
        <div className={classes.userN}>
            <img src={props.path} />
            <NavLink to={path}> {props.name} </NavLink>
        </div>

    )

};

export default UserN