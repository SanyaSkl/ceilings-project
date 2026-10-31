import {useAppSelector} from "@/shared/hooks"
import {selectStatus, selectThemeMode} from "./store/app-slice.ts"
import {getTheme} from "@/shared/config"
import {Box, LinearProgress, ThemeProvider} from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import {Routing} from "@/app/routing/Route"
import {ErrorSnackbar} from "@/shared/ui/ErrorSnackbar/ErrorSnackbar"
import {useEffect} from "react";
import {Footer, Header, Navbar} from "@/widgets";


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
            <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <Header />
                <Navbar />
                {status === "loading" && <LinearProgress />}

                <Box component="main" sx={{ flex: 1 }}>
                    <Routing />
                </Box>

                <Footer />
                <ErrorSnackbar />
            </Box>
        </ThemeProvider>
    )
}