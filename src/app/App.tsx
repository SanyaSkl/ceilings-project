import {useAppSelector} from "@/common/hooks"
import {selectStatus, selectThemeMode} from "./app-slice"
import {getTheme} from "@/common/theme"
import {LinearProgress, ThemeProvider} from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import {Header} from "@/common/Components/Header/Header"
import {Navbar} from "@/common/Components/Navbar/Navbar"
import {Routing} from "@/common/routing/Route"
import {ErrorSnackbar} from "@/common/Components/ErrorSnackbar/ErrorSnackbar"
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