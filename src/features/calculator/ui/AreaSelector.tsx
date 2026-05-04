import { Paper, Typography, Slider, TextField, Grid } from "@mui/material"
import React from "react"

interface Props {
    value: number
    onChange: (val: number) => void
}

export const AreaSelector = ({ value, onChange }: Props) => {
    const handleSlider = (_: Event, newValue: number | number[]) => {
        const val = Array.isArray(newValue) ? newValue[0] : newValue
        onChange(Math.max(0, val))
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value)
        onChange(isNaN(val) ? 0 : Math.max(0, val))
    }

    return (
        <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6">Площадь помещения</Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                    <Slider
                        value={value}
                        onChange={handleSlider}
                        min={0}
                        max={200}
                        valueLabelDisplay="auto"
                        size="small"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        type="number"
                        value={value}
                        onChange={handleInput}
                        size="small"
                        sx={{ width: 100 }}
                        InputProps={{ endAdornment: "м²" }}
                        inputProps={{ min: 0 }}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}