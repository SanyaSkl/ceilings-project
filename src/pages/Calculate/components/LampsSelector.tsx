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
    Box,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { HelpPopover } from "./HelpPopover"

interface Props {
    count: number
    onCountChange: (val: number) => void
    typeValue: number
    onTypeChange: (val: number) => void
}

export const LampsSelector = ({ count, onCountChange, typeValue, onTypeChange }: Props) => {
    const handleSlider = (_: Event, val: number | number[]) => onCountChange(val as number)

    const helpBacklight = "Светильник имеет дополнительную декоративную подсветку. Требует отдельного подключения."

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Светильники</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                        <Slider
                            value={count}
                            onChange={handleSlider}
                            min={0}
                            max={150}
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
                <Typography variant="caption" color="text.secondary" display="block" mt={1}>
                    Светильник и лампочка не входят в стоимость
                </Typography>

                <FormControl sx={{ mt: 2 }}>
                    <FormLabel>Тип светильников</FormLabel>
                    <RadioGroup value={typeValue} onChange={(e) => onTypeChange(Number(e.target.value))}>
                        <FormControlLabel value={1} control={<Radio />} label="Классические" />
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <FormControlLabel value={1.38} control={<Radio />} label="С подсветкой" />
                            <HelpPopover text={helpBacklight} />
                        </Box>
                        <FormControlLabel value={1.5} control={<Radio />} label="Споты" />
                    </RadioGroup>
                </FormControl>
            </AccordionDetails>
        </Accordion>
    )
}