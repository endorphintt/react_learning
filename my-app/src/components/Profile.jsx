import React from 'react';

const Profile = () => {
  return (
    <div className="profile">
      <img src="img/profile__header.jpeg" alt="img" className="profile__header"/>
      <div className="profile__person">
        <img src="img/logo.png" alt="profile__img" className="profile__img" />
        <div className="profile__info">
          <div className="profile__name">Endorphin</div>
          <p>Date of Birth: 2 january</p>
          <p>City: Wroclaw</p>
          <p>Education: Wroclaw Uniwersity</p>
          <p>Web site: https://endorphin.pl</p>
        </div>
      </div>
    </div>
  )
}

export default Profile;
