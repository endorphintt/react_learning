import React from 'react';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  debugger
  return (
    <Dialogs newMessageBody={props.store.getState().MessagesPage.newMessageBody} dispatch={props.store.dispatch} DialogsData={props.store.getState().MessagesPage.DialogsData} MessageData={props.store.getState().MessagesPage.MessageData}/>
  )
}

export default  DialogsContainer;