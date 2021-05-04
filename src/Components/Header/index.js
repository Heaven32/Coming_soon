import React from 'react';
import classes from './style.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"/>
        </header>
    )
}

export default Header;