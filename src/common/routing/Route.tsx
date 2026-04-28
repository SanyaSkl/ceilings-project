import { Route, Routes } from "react-router-dom"
import { HomePage } from "@/pages/HomePage/HomePage"
import { Catalog } from "@/pages/Catalog/Catalog"
import { Calculate } from "@/pages/Calculate/Calculate"
import { CeilingTypePage } from "@/features/ceilings/components/CeilingTypePage"
import { PageNotFound } from "@/common/Components/PageNotFound/PageNotFound"

export const Path = {
    Home: "/",
    HomeAlias: "/homepage",
    Catalog: "/catalog",
    Calculate: "/calculate",
    CeilingType: "/:type",
    NotFound: "/*",
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