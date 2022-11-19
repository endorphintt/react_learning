import React from 'react';
import classes from './Dialogs.module.scss'
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (   
    <NavLink className={navData => navData.isActive ? classes.dialog + ' ' + classes._active : classes.dialog} to={path}>{props.name}</NavLink>
  )
}

const Message = (props) => {
  return (
    <div className={classes.message}>{props.message}</div>
  )
}

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>
        <DialogsItem name="Dimych" id='1' />
        <DialogsItem name="Andrey" id='2' />
        <DialogsItem name="Sveta" id='3' />
        <DialogsItem name="Sasha" id='4' />
        <DialogsItem name="Viktor" id='5' />
        <DialogsItem name="Oleg" id='6' />
      </div>
      <div className={classes.messages}>
        <Message message="Hi man!" />
        <Message message="How are you?" />
        <Message message="Yo" />
        <Message message="Good luck!" />
      </div>
    </div>
  )
}

export default  Dialogs;