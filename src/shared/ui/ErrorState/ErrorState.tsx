import {Alert, AlertTitle, Box} from "@mui/material"
import {ReactNode} from "react"

type Props = {
    title?: string
    message?: string
    action?: ReactNode
}

export const ErrorState = ({
                               title = "Ошибка",
                               message = "Что-то пошло не так",
                               action,
                           }: Props) => {
    return (
        <Box sx={{display: "flex", justifyContent: "center", mt: 4}}>
            <Alert severity="error" variant="filled" action={action}>
                <AlertTitle>{title}</AlertTitle>
                {message}
            </Alert>
        </Box>
    )
}