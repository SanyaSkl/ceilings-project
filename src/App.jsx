import s from "./App.module.css"
import {Header} from "./Header/Header.jsx";
import {Navbar} from "./Navbar/Navbar.jsx";
import {HomePage} from "./pages/HomePage/HomePage.jsx";
import {Catalog} from "./pages/Catalog/Catalog.jsx";
import {Matte} from "./pages/Catalog/TypesCellings/Matte.jsx";
import {Glossy} from "./pages/Catalog/TypesCellings/Glossy.jsx";
import {Satin} from "./pages/Catalog/TypesCellings/Satin.jsx";
import {Soaring} from "./pages/Catalog/TypesCellings/Soaring.jsx";
import {TwoLevel} from "./pages/Catalog/TypesCellings/TwoLevel.jsx";
import {LightLines} from "./pages/Catalog/TypesCellings/LightLines.jsx";
import {Route, Routes} from "react-router-dom";
import {Calculate} from "@pages/Calculate/Calculate.jsx";

export const App = () => {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/homepage" element={<HomePage/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/calculate" element={<Calculate/>}/>
                <Route path="/matte" element={<Matte/>}/>
                <Route path="/glossy" element={<Glossy/>}/>
                <Route path="/satin" element={<Satin/>}/>
                <Route path="/soaring" element={<Soaring/>}/>
                <Route path="/twoLevel" element={<TwoLevel/>}/>
                <Route path="/lightLines" element={<LightLines/>}/>
            </Routes>
        </div>
    );
}