import React from 'react';
import classes from './style.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <img src={props.avatar} alt=""/>
            <NavLink to={"/dialogs/" + props.id} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}

export default  DialogItem;