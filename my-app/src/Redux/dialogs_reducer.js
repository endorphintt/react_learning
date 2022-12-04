const dialogsReducer = (state, action) => {
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

export default dialogsReducer;
