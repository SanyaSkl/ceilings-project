import { Route, Routes } from "react-router-dom"
import {Calculate, Catalog, CeilingTypePage, HomePage, PageNotFound} from "@/pages";



export const Path = {
    Home: "/",
    HomeAlias: "/homepage",
    Catalog: "/catalog",
    Calculate: "/calculate",
    CeilingType: "/:type",
    NotFound: "*",
} as const

export const Routing = () => {
    return (
        <Routes>
            <Route path={Path.Home} element={<HomePage />} />
            <Route path={Path.HomeAlias} element={<HomePage />} />
            <Route path={Path.Catalog} element={<Catalog />} />
            <Route path={Path.Calculate} element={<Calculate />} />
            <Route path={Path.CeilingType} element={<CeilingTypePage />} />
            <Route path={Path.NotFound} element={<PageNotFound />} />
        </Routes>
    )
}