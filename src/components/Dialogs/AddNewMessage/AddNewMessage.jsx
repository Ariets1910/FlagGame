import React from "react";
import classes from "./AddNewMessage.module.css"
import {addMessageActionCreator, newMessageTextActionCreator} from "../../../Redux/dialogsReducer";



const AddNewMessage = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {

        let text = newMessageElement.current.value;
        props.dispatch(addMessageActionCreator(text));
        newMessageElement.current.value = '';
        let text2 = newMessageElement.current.value;
        props.dispatch(newMessageTextActionCreator(text2))
    };

    let newMessageText = () => {
        let text2 = newMessageElement.current.value;
        props.dispatch(newMessageTextActionCreator(text2))

    };


    return (
        <form className={classes.form}>
            <div className={classes.textarea}>
                <textarea name="" ref={newMessageElement} cols="30" rows="10" onChange={newMessageText}
                          value={props.messageFieldStartValue}></textarea>
            </div>
            <div className={classes.addButton}>
                <button id="addPost" onClick={addMessage} onChange={newMessageText}>Додати повідомлення</button>
                <button type="reset">Очистити</button>
            </div>


        </form>
    )

};

export default AddNewMessage
