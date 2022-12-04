import React from 'react';
import classes from './SendMessage.module.scss';
import { sendMessageCreator } from '../../../Redux/dialogs_reducer';
import { updateNewMessageBody } from '../../../Redux/dialogs_reducer';

const SendMessage = (props) => {

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  }

  let onMessageClick = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBody(body))
  }


  return (
    <div className={classes.sendMessage}>
      <textarea onChange={ onMessageClick } value={props.newMessageBody} className={classes.sendMessage__text}></textarea>
      <button onClick={ onSendMessageClick } className={classes.sendMessage__button}>Send</button>
    </div>
  )
}

export default SendMessage;