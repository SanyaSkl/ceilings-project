import { Box, Container, Grid, Typography, Link, Divider, Stack } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import PhoneIcon from "@mui/icons-material/Phone"
import { Path } from "@/app/routing"

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "var(--footer-bg)",
                color: "var(--footer-text)",
                py: 4,
                mt: "auto", // Прижимает футер к низу страницы
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    {/* Блок 1: О компании */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            НАТЯЖНЫЕ ПОТОЛКИ
                        </Typography>
                        <Typography variant="body2">
                            Качественные натяжные потолки в Старом Осколе.
                            Замер бесплатно, монтаж от 270 р/м².
                        </Typography>
                    </Grid>

                    {/* Блок 2: Навигация */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Навигация
                        </Typography>
                        <Stack spacing={1}>
                            <Link
                                component={RouterLink}
                                to={Path.Catalog}
                                color="inherit"
                                underline="hover"
                                sx={{ "&:hover": { color: "var(--footer-link-hover)" } }}
                            >
                                Каталог
                            </Link>
                            <Link
                                component={RouterLink}
                                to={Path.Calculate}
                                color="inherit"
                                underline="hover"
                                sx={{ "&:hover": { color: "var(--footer-link-hover)" } }}
                            >
                                Калькулятор
                            </Link>
                            <Link
                                component={RouterLink}
                                to={Path.OrderPage}
                                color="inherit"
                                underline="hover"
                                sx={{ "&:hover": { color: "var(--footer-link-hover)" } }}
                            >
                                Оставить заявку
                            </Link>
                        </Stack>
                    </Grid>

                    {/* Блок 3: Контакты */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Контакты
                        </Typography>
                        <Stack spacing={1.5}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <PhoneIcon fontSize="small" />
                                <Link href="tel:+79803215541" color="inherit" underline="none">
                                    +7 980 321-55-41
                                </Link>
                            </Stack>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <PhoneIcon fontSize="small" />
                                <Link href="tel:+79045356060" color="inherit" underline="none">
                                    +7 904 535-60-60
                                </Link>
                            </Stack>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                Ежедневно с 09:00 до 20:00
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 3, borderColor: "var(--footer-divider)" }} />

                {/* Копирайт */}
                <Typography variant="body2" align="center">
                    © {currentYear} Натяжные потолки. Все права защищены.
                </Typography>
            </Container>
        </Box>
    )
}