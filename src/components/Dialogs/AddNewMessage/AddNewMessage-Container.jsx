import React from "react";
import classes from "./AddNewMessage.module.css"
import {addMessageActionCreator, newMessageTextActionCreator} from "../../../Redux/dialogsReducer";
import Dialogs from "../Dialogs";



const AddNewMessageContainer = (props) => {

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
    <Dialogs/>
    )

};

export default AddNewMessageContainer
