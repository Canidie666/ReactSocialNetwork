import React from "react";
import style from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={style.NavBar}>
            <div>Profile</div>
            <div>News</div>
            <div>Messages</div>
            <div>Friends</div>
            <div>Settings</div>
        </div>
    )
}

export default NavBar;