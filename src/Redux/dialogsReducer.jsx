import Natalia from "../images/Natalia.jpg";
import Genias from "../images/Genyas.jpg";
import Igor from "../images/Igor.jpg";
import Andriy from "../images/Andriy.jpg";
import Michael from "../images/profileimg.jpg";
import Roma from "../images/Roma.jpg";
import Sveta from "../images/sveta.jpg";

const ADD_MESSAGE = "addNewMessage"
const NEW_MESSAGE_TEXT = "updateMessageField"
export const addMessageActionCreator = (text) => {
    return {
        type: ADD_MESSAGE, dialogsMessage: text
    }
};

export const newMessageTextActionCreator = (text2) => {
    return {
        type: NEW_MESSAGE_TEXT, newMessage: text2
    }
};


let initialState = {
    users: [
        {id: 1, path: Natalia, name: "Natalia"},
        {id: 2, path: Genias, name: "Natalia"},
        {id: 3, path: Igor, name: "Igor"},
        {id: 4, path: Andriy, name: "Andriy"},
        {id: 5, path: Michael, name: "Michael"},
        {id: 6, path: Roma, name: "Roma"},
        {id: 7, path: Sveta, name: "Sveta"},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hi, hello"},
        {id: 3, message: "How is your day?"},
        {id: 4, message: "Fine, for sure"},
        {id: 5, message: "Nice to hear that!!!"},
        {id: 6, message: "I love react!!"},
    ],
    messageFieldStartValue: "Add some message",
};

const dialogsReducer = (state = initialState, action) => {
    if (action.type === ADD_MESSAGE) {
        let newDialogsMessage = {
            id: state.messages.length + 1,
            message: action.dialogsMessage,
        };
        state.messages.push(newDialogsMessage);
    } else if (action.type === NEW_MESSAGE_TEXT) {
        state.messageFieldStartValue = action.newMessage;

    }
    return state;
};
export default dialogsReducer;



