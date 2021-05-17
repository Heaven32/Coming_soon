import React from 'react';
import classes from './style.module.css'
import {NavLink} from "react-router-dom";

const NavigationLink = () => {
    return (
        <nav className={classes.navigation}>
            <ul>
                <li className={classes.link}>
                    <NavLink to="/home" activeClassName={classes.active}>Home</NavLink>
                </li>
                <li className={classes.link}>
                    <NavLink to="/dialogs" activeClassName={classes.active}>Message</NavLink>
                </li>
                <li className={classes.link}>
                    <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                </li>
                <li className={classes.link}>
                    <NavLink to="/about" activeClassName={classes.active}>About</NavLink>
                </li>
                <li className={classes.link}>
                    <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
                </li>
                <li className={classes.link}>
                    <NavLink to="/films" activeClassName={classes.active}>Watch Films</NavLink>
                </li>
                <li className={classes.link}>
                    <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
                </li>
                <li className={classes.link}>
                    <NavLink to="/count-page" activeClassName={classes.active}>Count-Page</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default NavigationLink;