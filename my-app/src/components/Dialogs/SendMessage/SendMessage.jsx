import React from 'react';
import classes from './SendMessage.module.scss'

const SendMessage = () => {
  return (
    <div className={classes.sendMessage}>
      <textarea className={classes.sendMessage__text}></textarea>
      <button className={classes.sendMessage__button}>Send</button>
    </div>
  )
}

export default SendMessage;