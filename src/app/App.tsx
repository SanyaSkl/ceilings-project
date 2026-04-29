import {useAppSelector} from "@/shared/hooks"
import {selectStatus, selectThemeMode} from "./store/app-slice.ts"
import {getTheme} from "@/shared/config"
import {LinearProgress, ThemeProvider} from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import {Header} from "@/widgets/Header/Header"
import {Navbar} from "@/widgets/Navbar/Navbar"
import {Routing} from "@/app/routing/Route"
import {ErrorSnackbar} from "@/shared/ui/ErrorSnackbar/ErrorSnackbar"
import {useEffect} from "react";

export const App = () => {
    const themeMode = useAppSelector(selectThemeMode)
    const status = useAppSelector(selectStatus)

    const theme = getTheme(themeMode)

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", themeMode);
    }, [themeMode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
                <Header/>
                <Navbar/>
                {status === "loading" && <LinearProgress/>}
                <Routing/>
                <ErrorSnackbar/>
            </div>
        </ThemeProvider>
    )
}