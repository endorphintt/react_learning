import React from "react";
import './Dialogs.scss'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { updateNewMessageBodyActionCreator, sendMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        newMessageBody: state.messagesPage.newMessageBody,
        dialogsElement: state.messagesPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>),
        messagesElement: state.messagesPage.messages.map(m => <Message key={m.id} message={m.message}/>)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateMessageBody: (text) => {
            dispatch(updateNewMessageBodyActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;