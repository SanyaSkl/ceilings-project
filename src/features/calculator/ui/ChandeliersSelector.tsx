import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Grid,
    Slider,
    TextField,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

interface Props {
    count: number
    onCountChange: (val: number) => void
    typeValue: number
    onTypeChange: (val: number) => void
}

export const ChandeliersSelector = ({ count, onCountChange, typeValue, onTypeChange }: Props) => {
    const handleSlider = (_: Event, val: number | number[]) => onCountChange(val as number)

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Люстры</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                        <Slider
                            value={count}
                            onChange={handleSlider}
                            min={0}
                            max={15}
                            size="small"
                            valueLabelDisplay="auto"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            type="number"
                            value={count}
                            onChange={(e) => onCountChange(Number(e.target.value))}
                            size="small"
                            sx={{ width: 100 }}
                            InputProps={{ endAdornment: "шт" }}
                        />
                    </Grid>
                </Grid>
                <FormControl sx={{ mt: 2 }}>
                    <FormLabel>Вид люстры</FormLabel>
                    <RadioGroup value={typeValue} onChange={(e) => onTypeChange(Number(e.target.value))}>
                        <FormControlLabel value={1} control={<Radio />} label="Классические (собранные)" />
                        <FormControlLabel value={1.5} control={<Radio />} label="Классические (несобранные)" />
                    </RadioGroup>
                </FormControl>
            </AccordionDetails>
        </Accordion>
    )
}