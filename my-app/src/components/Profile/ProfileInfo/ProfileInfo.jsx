import React from "react";
import classes from './ProfileInfo.module.scss'

const ProfileInfo = (props) => {
    return (
        <div className={classes.ProfileInfo}>
            <img src="img/profile__header.jpeg" alt="img" className={classes.profile__header} />
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
        </div>
    )
}

export default ProfileInfo;
