import React from "react";
import classes from './Menu.module.scss'
import {NavLink} from 'react-router-dom'

const Menu = () => {
    return (
        <ul className={classes.menu__list}>
            <li><NavLink to='/profile' className={navData => navData.isActive ? classes.menu__link_active : classes.menu__link}><img className={classes.menu__icon} src="img/profile.png" alt="img"/></NavLink></li>
            <li><NavLink to="/dialogs" className={navData => navData.isActive ? classes.menu__link_active : classes.menu__link}><img className={classes.menu__icon}  src="img/messages.png" alt="img"/></NavLink></li>
            <li><NavLink to='/music' className={navData => navData.isActive ? classes.menu__link_active : classes.menu__link}><img className={classes.menu__icon}  src="img/music.png" alt="img"/></NavLink></li>
            <li><NavLink to='/news' className={navData => navData.isActive ? classes.menu__link_active : classes.menu__link}><img className={classes.menu__icon} src="img/news.png" alt="img"/></NavLink></li>
            <li><NavLink to='/users' className={navData => navData.isActive ? classes.menu__link_active : classes.menu__link}><img className={classes.menu__icon}  src="img/users.png" alt="img"/></NavLink></li>
            <li><NavLink to='/settings' className={navData => navData.isActive ? classes.menu__link_active : classes.menu__link}><img className={classes.menu__icon}  src="img/settings.png" alt="img"/></NavLink></li>
        </ul>
    )
}

export default Menu;