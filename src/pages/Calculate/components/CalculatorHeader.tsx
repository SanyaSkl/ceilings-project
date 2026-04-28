import { Paper, Typography } from "@mui/material"

interface Props {
    basePrice: number
}

export const CalculatorHeader = ({ basePrice }: Props) => {
    return (
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Калькулятор стоимости натяжного потолка
            </Typography>
            <Typography variant="subtitle1" align="center" color="text.secondary">
                Базовая цена: 1 м² = {basePrice} рублей
            </Typography>
        </Paper>
    )
}