import React from "react";
import './Profile.scss'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return(
        <div className="profile">
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;