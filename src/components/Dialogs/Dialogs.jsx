import React from "react";
import classes from "./Dialogs.module.css"
import MessageN from "./Message/MessageN";
import UserN from "./UserN/UserN";
import AddNewMessage from "./AddNewMessage/AddNewMessage";



const Dialogs = (props) => {


    let userComponents = props.dialogs.users.map((user) => <UserN name={user.name} id={user.id} path={user.path}/>);
    let messageComponents = props.dialogs.messages.map((message) => <MessageN message={message.message} />);


    return (

        <div className={classes.dialogs}>
            <div className={classes.users}>
                {userComponents}
            </div>
            <div className={classes.messages}>
                {messageComponents}
            </div>
            <div className={classes.addNewMessage}>
                <AddNewMessage dispatch={props.dispatch}
                               messageFieldStartValue={props.messageFieldStartValue}
                               dispatch={props.dispatch}/>
            </div>
        </div>


    )
};

export default Dialogs
