import React from "react";
import classes from "./AddNewMessage.module.css"



const AddNewMessage = (props) => {

    let newMessageElement = React.createRef();

    let onAddMessage = () => {

        let text = newMessageElement.current.value;
        props.onAddMessage(text);
        newMessageElement.current.value = '';
        text = newMessageElement.current.value;
        props.onNewMessageText(text)
    };

    let onNewMessageText = () => {
        let text = newMessageElement.current.value;
        props.onNewMessageText(text)

    };


    return (
        <form className={classes.form}>
            <div className={classes.textarea}>
                <textarea name="" ref={newMessageElement} cols="30" rows="10" onChange={onNewMessageText}
                          value={props.messageFieldStartValue}></textarea>
            </div>
            <div className={classes.addButton}>
                <button id="addPost" onClick={onAddMessage} onChange={onNewMessageText}>Додати повідомлення</button>
                <button type="reset">Очистити</button>
            </div>


        </form>
    )

};

export default AddNewMessage
