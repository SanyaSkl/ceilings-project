import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    FormControlLabel,
    Radio,
    Grid,
    Slider,
    TextField,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { HelpPopover } from "./HelpPopover.tsx"

interface Props {
    furniture: boolean
    setFurniture: (val: boolean) => void
    ceramicTiles: boolean
    setCeramicTiles: (val: boolean) => void
    porcelainTiles: number
    setPorcelainTiles: (val: number) => void
}

export const AdditionalOptions = ({
                                      furniture,
                                      setFurniture,
                                      ceramicTiles,
                                      setCeramicTiles,
                                      porcelainTiles,
                                      setPorcelainTiles,
                                  }: Props) => {
    const handlePorcelainSlider = (_: Event, val: number | number[]) => setPorcelainTiles(val as number)
    const helpPorcelain = "Керамогранит требует специального крепления профиля, что увеличивает стоимость работ."

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Дополнительные опции</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box>
                    <FormControlLabel
                        control={<Radio checked={furniture} onChange={() => setFurniture(!furniture)} />}
                        label="Мебелированное помещение +1000р"
                    />
                    <FormControlLabel
                        control={<Radio checked={ceramicTiles} onChange={() => setCeramicTiles(!ceramicTiles)} />}
                        label="Керамическая плитка на стенах +1500р"
                    />
                    <Box sx={{ mt: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Typography variant="body2">Керамогранитная плитка:</Typography>
                            <HelpPopover text={helpPorcelain} />
                        </Box>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs>
                                <Slider
                                    value={porcelainTiles}
                                    onChange={handlePorcelainSlider}
                                    min={0}
                                    max={50}
                                    size="small"
                                    valueLabelDisplay="auto"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    type="number"
                                    value={porcelainTiles}
                                    onChange={(e) => setPorcelainTiles(Number(e.target.value))}
                                    size="small"
                                    sx={{ width: 100 }}
                                    InputProps={{ endAdornment: "м.п." }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}