import React from "react";
import './Dialogs.scss'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { updateNewMessageBodyActionCreator, sendMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";


const DialogsContainer = (props) => {
    return(
        <StoreContext.Consumer>
            {
            (store) => {
                const updateMessageBody = (text) => {
                    store.dispatch(updateNewMessageBodyActionCreator(text))
                }
            
                const sendMessage = () => {
                    store.dispatch(sendMessageActionCreator())
                }

                let dialogsElement = store.getState().messagesPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
                let messagesElement = store.getState().messagesPage.messages.map(m => <Message key={m.id} message={m.message}/>)

                return <Dialogs newMessageText={store.getState().messagesPage.newMessageBody} sendMessage={sendMessage} updateMessageBody={updateMessageBody} dialogsElement={dialogsElement} messagesElement={messagesElement} />
        }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;