import { Route, Routes } from "react-router-dom"
import {Calculate, Catalog, CeilingTypePage, HomePage, PageNotFound} from "@/pages";
import {OrderPage} from "@pages/Order/OrderPage.tsx";
import {PhotosPage} from "@pages/photos/PhotosPage.tsx";
import {ServicesPage} from "@pages/services/ServicesPage.tsx";

export const Path = {
    Home: "/",
    HomeAlias: "/homepage",
    Catalog: "/catalog",
    Calculate: "/calculate",
    CeilingType: "/:type",
    NotFound: "*",
    OrderPage: "/order",
    Photos: "/photos",
    Services: "/services",
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
            <Route path={Path.OrderPage} element={<OrderPage />} />
            <Route path={Path.Photos} element={<PhotosPage />} />
            <Route path={Path.Services} element={<ServicesPage />} />
        </Routes>
    )
}