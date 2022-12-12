let initialState = {
    DialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Oleg'},
    ],             
    MessageData: [
        {id: 1, message: 'Hi!', likesCount: 2},
        {id: 1, message: 'How are you?', likesCount: 3},
        {id: 2, message: 'What are you thinking about?', likesCount: 4},
        {id: 3, message: 'talk to me!', likesCount: 5},
        {id: 4, message: 'I am Alisa!', likesCount: 23},
        {id: 5, message: 'Stop it', likesCount: 34},
        {id: 6, message: 'I\'d like to show me', likesCount: 45},
        {id: 2, message: 'what?', likesCount: 56},
    ],
    newMessageBody: '',
}

const DialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return state;
        case 'SEND-MESSAGE':
            let body = state.newMessageBody; 
            state.newMessageBody= '';
            state.MessageData.push({id: 6, message: body, likesCount: 0,});
            return state;
        default:
            return state;
    }
} 

export const sendMessageCreator = () => {
    return {
      type: 'SEND-MESSAGE',
    }
}

export const updateNewMessageBody = (body) => {
    return {
        body: body,
        type: 'UPDATE-NEW-MESSAGE-BODY',
    }
}

export default DialogsReducer;
