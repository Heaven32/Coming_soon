import React from 'react';
import classes from './style.module.css'

const ProfileInfo = () => {
    return (
        <div className="">
            <div className={classes.bg}>
                <img src="https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg" />
            </div>
            <div className="">
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;