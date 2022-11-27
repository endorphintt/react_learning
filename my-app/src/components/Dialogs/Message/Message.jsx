import React from 'react';
import classes from './Message.module.scss'

const Message = (props) => {
  return (
    <div className={classes.message}>{props.message} {props.likesCount} likes</div>
  )
}

export default  Message;