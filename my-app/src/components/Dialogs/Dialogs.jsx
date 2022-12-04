import React from 'react';
import classes from './Dialogs.module.scss'
import { NavLink } from 'react-router-dom';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import SendMessage from './SendMessage/SendMessage';

const Dialogs = (props) => {

  const dialogsElements = props.DialogsData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} />); 
  const messageElements = props.MessageData.map(message => <Message message={message.message} likesCount={message.likesCount} />); 

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        <div className={classes.message__items}>
          {messageElements}
        </div>
        <SendMessage newMessageBody={props.newMessageBody} dispatch={props.dispatch}/>
      </div>
    </div>
  )
}

export default  Dialogs;