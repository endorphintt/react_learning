import React from 'react';
import classes from './Header.module.scss'

const Header = () => {
  return (
    <div className={classes.header}>
      <img src="img/logo.png" alt="img" className={classes.header__img} />
    </div>
  )
}

export default Header;
