import React from "react";
import classes from "./Dialogs.module.css"
import MessageN from "./Message/MessageN";
import UserN from "./UserN/UserN";

const Dialogs = (props) => {

    let userComponents = props.users.map((user) => <UserN name={user.name} id={user.id} path={user.path}/>);
    let messageComponents = props.messages.map((message) => <MessageN message={message.message}/>);
    let newMessageElement = React.createRef();
    let addMessage = () => {
      let text = newMessageElement.current.value;
      alert (text)
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                {userComponents}
            </div>
            <div className={classes.messages}>
                {messageComponents}
            </div>
            <div>
                <form className={classes.form}>
                    <div className={classes.textarea}>
                        <textarea name="" ref={newMessageElement} cols="30" rows="10"></textarea>
                    </div>
                    <div className={classes.addButton}>
                        <button id="addPost" onClick={ addMessage }>Додати повідомлення</button>
                        <button type="reset">Очистити</button>
                    </div>


                </form>
            </div>
        </div>


    )
};

export default Dialogs
