import { Popover, Typography, IconButton } from "@mui/material"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
import React, { useState, ReactNode } from "react"

interface Props {
    children?: ReactNode   // если нужна иконка внутри
    text: string           // текст подсказки
}

export const HelpPopover = ({ text }: Props) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <IconButton size="small" onClick={handleOpen}>
                <HelpOutlineIcon fontSize="small" />
            </IconButton>
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Typography sx={{ p: 2, maxWidth: 300 }}>{text}</Typography>
            </Popover>
        </>
    )
}