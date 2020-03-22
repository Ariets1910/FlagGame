import React from "react";
import classes from "./Dialogs.module.css"
import MessageN from "./Message/MessageN";
import UserN from "./UserN/UserN";
import AddNewMessage from "./AddNewMessage/AddNewMessage";


function sayHi (name) {
        alert (`Hello, ${name}`)
}

function sayBye (message) {
        alert (`Bye, ${message}`)
}

function BIGGY (f1, f2, finished ){
    if (finished) {
        sayBye ("friends")
    }
    else {
        sayHi("Max")
    }
};

BIGGY (sayHi, sayBye,)



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
