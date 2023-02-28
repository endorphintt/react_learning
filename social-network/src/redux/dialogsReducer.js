const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
    dialogs: [
        {id: 1, name:'Sasha',},
        {id: 2, name:'Sasha',},
        {id: 3, name:'Sasha',},
        {id: 4, name:'Sasha',},
        {id: 5, name:'Sasha',},
    ],
    messages: [
        {message: 'hi!', id: 1,},
        {message: 'hi!', id: 2,},
        {message: 'hi!', id: 3,},
        {message: 'hi!', id: 4,},
        {message: 'hi!', id: 5,},
        {message: 'hi!', id: 6,},
    ], 
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let NewMessageText = {
                message: state.newMessageBody,
                id: state.messages.length + 1,
            }
            state.messages.push(NewMessageText);
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText;
            return state
        default:
            return state
    }
}

export const updateNewMessageBodyActionCreator = (text) => {
    return ({
        type: UPDATE_NEW_MESSAGE_BODY,
        newText: text,
    })
}

export const sendMessageActionCreator = () => {
    return ({
        type: SEND_MESSAGE
    })
}

export default dialogsReducer;