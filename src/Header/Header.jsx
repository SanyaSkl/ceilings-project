import React from "react";
import classes from "./Header.module.css"
import logo from "./../assets/Images/logo.jpg"
import HomePage from "../Content/HomePage";
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header>
            <div className={classes.header}>
                <NavLink href={HomePage} to="/homepage">
                    <img className={classes.logo} src={logo} alt={"logo"}/>
                </NavLink>
                <h2 className={classes.textHeader}>НАТЯЖНЫЕ ПОТОЛКИ</h2>
            </div>
        </header>
    )
}


export default Header;