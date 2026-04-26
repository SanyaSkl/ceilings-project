import { ThemeProvider } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import { useAppSelector } from "@/common/hooks"
import { selectThemeMode } from "./app-slice"
import { getTheme } from "@/common/theme"
import { Header } from "@/common/Components/Header/Header"
import { Navbar } from "@/common/Components/Navbar/Navbar"
import { Routing } from "@/common/routing/Route"

export const App = () => {
    const themeMode = useAppSelector(selectThemeMode)
    const theme = getTheme(themeMode)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <Header />
                <Navbar />
                <Routing />
            </div>
        </ThemeProvider>
    )
}