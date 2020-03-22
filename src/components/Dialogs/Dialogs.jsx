import React from "react";
import classes from "./Dialogs.module.css"
import MessageN from "./Message/MessageN";
import UserN from "./UserN/UserN";
import AddNewMessageContainer from "./AddNewMessage/AddNewMessage-Container";



const Dialogs = (props) => {


    let userComponents = props.store.getState().dialogs.users.map((user) => <UserN name={user.name} id={user.id} path={user.path}/>);
    let messageComponents = props.store.getState().dialogs.messages.map((message) => <MessageN message={message.message} />);


    return (

        <div className={classes.dialogs}>
            <div className={classes.users}>
                {userComponents}
            </div>
            <div className={classes.messages}>
                {messageComponents}
            </div>
            <div className={classes.addNewMessage}>
                <AddNewMessageContainer store={props.store}/>
            </div>
        </div>


    )
};

export default Dialogs
