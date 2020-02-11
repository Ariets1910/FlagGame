import React from "react";
import classes from "./Dialogs.module.css"
import MessageN from "./Message/MessageN";
import UserN from "./UserN/UserN";

const Dialogs = (props) => {

    let userComponents = props.users.map((user) => <UserN name={user.name} id={user.id}/>);


    let messageComponents = props.messages.map((message) => <MessageN message={message.message}/>);
    console.log(messageComponents);


    return (
        <div className={classes.dialogs}>

            <div className={classes.users}>
                {userComponents}


            </div>
            <div className={classes.messages}>
                {messageComponents}


            </div>
        </div>


    )
};

export default Dialogs
