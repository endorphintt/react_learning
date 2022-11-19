import React from 'react';
import classes from './Menu.module.scss'
import {NavLink} from "react-router-dom"

const Menu = () => {
  return (
    <ul className={classes.menu__list}>
      <li><NavLink to='/profile' className={navData => navData.isActive ? classes.menu__link_active : classes.menu__link}>Profile</NavLink></li>
      <li><NavLink to="/dialogs" className={navData => navData.isActive ? classes.menu__link_active : classes.menu__link}> Messages</NavLink></li>
      <li><NavLink to='/music' className={navData => navData.isActive ? classes.menu__link_active : classes.menu__link}>Music</NavLink></li>
      <li><NavLink to='/news' className={navData => navData.isActive ? classes.menu__link_active : classes.menu__link}>News</NavLink></li>
      <li><NavLink to='/settings' className={navData => navData.isActive ? classes.menu__link_active : classes.menu__link}>Settings</NavLink></li>
    </ul>
  )
}

export default Menu;
