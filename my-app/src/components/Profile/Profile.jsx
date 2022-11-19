import React from 'react';
import classes from './Profile.module.scss'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={classes.profile}>
      <img src="img/profile__header.jpeg" alt="img" className={classes.profile__header}/>
      <div className={classes.profile__person}>
        <img src="img/logo.png" alt="profile__img" className={classes.profile__img} />
        <div className={classes.profile__info}>
          <div className="{classes.profile__name}">Endorphin</div>
          <p>Date of Birth: 2 january</p>
          <p>City: Wroclaw</p>
          <p>Education: Wroclaw Uniwersity</p>
          <p>Web site: https://endorphin.pl</p>
        </div>
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;
