import React from "react";
import classes from "./Dialogs.module.css"
import MessageN from "./Message/MessageN";
import UserN from "./UserN/UserN";
import AddNewMessage from "./AddNewMessage/AddNewMessage";

const Dialogs = (props) => {

    let userComponents = props.users.map((user) => <UserN name={user.name} id={user.id} path={user.path}/>);
    let messageComponents = props.messages.map((message) => <MessageN message={message.message} />);



    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                {userComponents}
            </div>
            <div className={classes.messages}>
                {messageComponents}
            </div>
            <div className={classes.addNewMessage}>
                <AddNewMessage addNewMessage={props.addNewMessage}
                               messageFieldStartValue={props.messageFieldStartValue}
                               updateMessage={props.updateMessage}/>
            </div>
        </div>


    )
};

export default Dialogs
