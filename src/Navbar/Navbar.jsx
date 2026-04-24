import React from "react";
import classes from "./Navbar.module.css";
import phone from "./../assets/Images/phone.png"
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className={classes.nav}>
                <div className={classes.number}>
                    <img className={classes.phoneImg} src={phone} alt={"phone"}/> +7980-321-55-41
                    <img className={classes.phoneImg} src={phone} alt={"phone"}/> +7904-535-60-60
                </div>
                <h2 className={classes.tagline}>Мы едем к вашим соседям</h2>
                        <Link to="/catalog" className={classes.navMenu}>Каталог</Link>
                        <Link to="/services" className={classes.navMenu}>Услуги</Link>
                        <Link to="/calculate" className={classes.navMenu}>Калькулятор</Link>
                        <Link to="/photo" className={classes.navMenu}>Фото</Link>
            </div>
        </nav>
    )
}

export default Navbar;