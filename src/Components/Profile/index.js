import React from 'react';
import ProfileInfo from "./ProfileInfo";
import classes from './style.module.css'
import MyPosts from "./MyPosts";

const Profile = (props) => {
    return (
        <div className="">
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;