import React from "react";
import './Dialogs.scss'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { updateNewMessageBodyActionCreator, sendMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let dialogsElement = props.store.getState().messagesPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElement = props.store.getState().messagesPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    const updateMessageBody = (text) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(text))
    }

    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    return(
        <Dialogs newMessageText={props.store.getState().messagesPage.newMessageBody} sendMessage={sendMessage} updateMessageBody={updateMessageBody} dialogsElement={dialogsElement} messagesElement={messagesElement} />
    )
}

export default DialogsContainer;