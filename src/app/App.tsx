import s from "./App.module.css"
import {Header} from "@/common/Components/Header/Header.tsx";
import {Navbar} from "@/common/Components/Navbar/Navbar.tsx";
import {Routing} from "@/common/routing/Route.tsx";

export const App = () => {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <Navbar/>
            <Routing/>
        </div>
    );
}