import {Route, Routes} from "react-router-dom";
import {HomePage} from "@pages/HomePage/HomePage.tsx";
import {Matte} from "@pages/Catalog/TypesCellings/Matte.tsx";
import {Glossy} from "@pages/Catalog/TypesCellings/Glossy.tsx";
import {Calculate} from "@pages/Calculate/Calculate.tsx";
import {Catalog} from "@pages/Catalog/Catalog.tsx";
import {Satin} from "@pages/Catalog/TypesCellings/Satin.tsx";
import {Soaring} from "@pages/Catalog/TypesCellings/Soaring.tsx";
import {TwoLevel} from "@pages/Catalog/TypesCellings/TwoLevel.tsx";
import {LightLines} from "@pages/Catalog/TypesCellings/LightLines.tsx";


export const Path = {
    HomePage: "/",
    HomePageLogo: "/homepage",
    Catalog: "/catalog",
    Calculate: "/calculate",
    Matte: "/matte",
    Glossy: "/glossy",
    Satin: "/satin",
    Soaring: "/soaring",
    TwoLevel: "/twoLevel",
    LightLines: "/lightLines",
} as const;

export const Routing = () => {
    return (
        <Routes>
            <Route path={Path.HomePage} element={<HomePage/>}/>
            <Route path={Path.HomePageLogo} element={<HomePage/>}/>
            <Route path={Path.Catalog} element={<Catalog/>}/>
            <Route path={Path.Calculate} element={<Calculate/>}/>
            <Route path={Path.Matte} element={<Matte/>}/>
            <Route path={Path.Glossy} element={<Glossy/>}/>
            <Route path={Path.Satin} element={<Satin/>}/>
            <Route path={Path.Soaring} element={<Soaring/>}/>
            <Route path={Path.TwoLevel} element={<TwoLevel/>}/>
            <Route path={Path.LightLines} element={<LightLines/>}/>
        </Routes>
    )
}