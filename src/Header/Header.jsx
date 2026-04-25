import s from "./Header.module.css"
import logo from "../assets/Images/logo.jpg"
import {NavLink} from "react-router-dom";


export const Header = () => {
    return (
        <header>
            <div className={s.header}>
                <NavLink to="/homepage">
                    <img className={s.logo} src={logo} alt={"logo"}/>
                </NavLink>
                <h2 className={s.textHeader}>НАТЯЖНЫЕ ПОТОЛКИ</h2>
            </div>
        </header>
    )
}