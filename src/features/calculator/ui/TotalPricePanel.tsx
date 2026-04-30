import { Paper, Typography, Box, IconButton } from "@mui/material"
import RestartAltIcon from "@mui/icons-material/RestartAlt"

interface Props {
    total: number
    onReset: () => void
}

export const TotalPricePanel = ({ total, onReset }: Props) => {
    const formattedTotal = total.toLocaleString("ru")

    return (
        <Paper
            elevation={6}
            sx={{
                position: "sticky",
                bottom: 16,
                mt: 4,
                p: 2,
                bgcolor: "primary.main",
                color: "white",
                borderRadius: 3,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Typography variant="h6">Стоимость натяжного потолка:</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography variant="h5" fontWeight="bold">
                    {formattedTotal} руб.
                </Typography>
                <IconButton onClick={onReset} color="inherit" aria-label="сбросить">
                    <RestartAltIcon />
                </IconButton>
            </Box>
        </Paper>
    )
}