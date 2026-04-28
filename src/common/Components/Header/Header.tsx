import s from "./Header.module.css"
import logo from "@assets/Images/logo.jpg"
import {NavLink} from "react-router-dom";
import {changeThemeModeAC, selectThemeMode} from "@/app/app-slice.ts";
import {useDispatch} from "react-redux";
import {Switch} from "@mui/material";
import {useAppSelector} from "@/common/hooks";



export const Header = () => {
    const themeMode = useAppSelector(selectThemeMode);
    const dispatch = useDispatch();

    const changeMode = () => {
        dispatch(changeThemeModeAC({themeMode: themeMode === "light" ? "dark" : "light"}));
    }

    return (
        <header>
            <div className={s.header}>
                <NavLink to="/homepage">
                    <img className={s.logo} src={logo} alt="logo"/>
                </NavLink>
                <h2 className={s.textHeader}>НАТЯЖНЫЕ ПОТОЛКИ</h2>
                <Switch color="default" onChange={changeMode} checked={themeMode === "dark"}/>
            </div>
        </header>
    )
}