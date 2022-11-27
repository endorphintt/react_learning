import React from 'react';
import classes from './DialogsItem.module.scss'
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (   
    <NavLink className={navData => navData.isActive ? classes.dialog + ' ' + classes._active : classes.dialog} to={path}>{props.name}</NavLink>
  )
}

export default DialogsItem;