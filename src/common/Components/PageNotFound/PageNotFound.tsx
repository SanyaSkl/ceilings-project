import {Link} from "react-router-dom"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

export const PageNotFound = () => {
    return (
        <Container sx={{textAlign: "center", py: 8}}>
            <Typography variant="h1" component="h1" gutterBottom>
                404
            </Typography>
            <Typography variant="h5" gutterBottom>
                Страница не найдена
            </Typography>
            <Button variant="contained" component={Link} to="/">
                На главную
            </Button>
        </Container>
    )
}