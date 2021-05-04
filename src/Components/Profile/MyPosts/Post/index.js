import React from 'react';
import classes from './style.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt=""/>
                name:{props.name} age:{props.age}
            <div className="">
                <span>like</span>
                <span>{props.countLike}</span>
                <div className={classes.message}>{props.message}</div>
            </div>
        </div>

    );
}

export default Post;