import './ProfileInfo.scss';

const ProfileInfo = () => {
    return(
        <div className="profileInfo">
            <img src="img/cap.png" alt="cap" className="profile__cap" />
            <div className="profile__data">
                <img src="img/profile_img.png" alt="" className="profile__img" />
                <div className="user">
                    <h2 className="user__name">Taras Tsehenko</h2>
                    <ul className="user__about">
                        <li className="user__about_li">Date of Birth: 27.02.2003</li>
                        <li className="user__about_li">City: Wroclaw, Poland</li>
                        <li className="user__about_li">Education: WU</li>
                        <li className="user__about_li">Web Site: https://tt-portfolio.pl</li>
                    </ul>
                </div>               
            </div>
        </div>
    )
}

export default ProfileInfo;