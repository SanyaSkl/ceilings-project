import {Box, Typography} from "@mui/material"

type Props = {
    message?: string
}

export const EmptyState = ({
                               message = "Ничего не найдено",
                           }: Props) => {
    return (
        <Box sx={{textAlign: "center", mt: 4}}>
            <Typography variant="h6">{message}</Typography>
        </Box>
    )
}