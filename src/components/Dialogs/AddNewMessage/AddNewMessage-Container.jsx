import React from "react";
import AddNewMessage from "./AddNewMessage";
import {addMessageActionCreator, newMessageTextActionCreator} from "../../../Redux/dialogsReducer";



const AddNewMessageContainer = (props) => {

    let state = props.store.getState();

    let onAddMessage = (text) => {
        props.store.dispatch(addMessageActionCreator(text));
        props.store.dispatch(newMessageTextActionCreator(text));
    };

    let onNewMessageText = (text) => {
        props.store.dispatch(newMessageTextActionCreator(text));

    };


    return (
        <AddNewMessage onAddMessage={onAddMessage} onNewMessageText={onNewMessageText} messageFieldStartValue={state.dialogs.messageFieldStartValue}/>
    )

};

export default AddNewMessageContainer
