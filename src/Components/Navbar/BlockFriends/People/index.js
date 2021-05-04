import React from 'react';
import classes from './style.module.css'

const People = (props) => {

    return (
        <div className={classes.wrap}>
            <div className={classes.ava}><img src={props.ava} /></div>
            <div className={classes.name_people}>{props.name}</div>
        </div>
    )
}
export default People;