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

const dialogsReducer = (state, action) => {
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



