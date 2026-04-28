import { useState } from "react"
import {
    Container,
    Paper,
    Typography,
    Slider,
    TextField,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormControl,
    FormLabel,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
    Box,
    IconButton,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import RestartAltIcon from "@mui/icons-material/RestartAlt"

export const Calculate = () => {
    const [square, setSquare] = useState(0)
    const [type, setType] = useState(1) // множитель: 1, 1.2, 1.3, 1.5
    const [lamps, setLamps] = useState(0)
    const [lampType, setLampType] = useState(1)
    const [chandeliers, setChandeliers] = useState(0)
    const [chandelierType, setChandelierType] = useState(1)
    const [furniture, setFurniture] = useState(false)
    const [ceramicTiles, setCeramicTiles] = useState(false)
    const [porcelainTiles, setPorcelainTiles] = useState(0)

    const BASE_PRICE = 550
    const LAMP_PRICE = 500
    const CHANDELIER_PRICE = 1000
    const PORCELAIN_PRICE = 500

    const totalPrice = () => {
        let total = BASE_PRICE * square * type
        total += LAMP_PRICE * lamps * lampType
        total += CHANDELIER_PRICE * chandeliers * chandelierType
        if (furniture) total += 1000
        if (ceramicTiles) total += 1500
        total += porcelainTiles * PORCELAIN_PRICE
        return total
    }

    const resetCalculator = () => {
        setSquare(0)
        setType(1)
        setLamps(0)
        setLampType(1)
        setChandeliers(0)
        setChandelierType(1)
        setFurniture(false)
        setCeramicTiles(false)
        setPorcelainTiles(0)
    }

    const formattedTotal = totalPrice().toLocaleString("ru")

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Калькулятор стоимости натяжного потолка
                </Typography>
                <Typography variant="subtitle1" align="center" color="text.secondary">
                    Базовая цена: 1 м² = {BASE_PRICE} рублей
                </Typography>
            </Paper>

            {/* Площадь */}
            <Paper sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6">Площадь помещения</Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                        <Slider
                            value={square}
                            onChange={(_, val) => setSquare(val as number)}
                            min={0}
                            max={200}
                            valueLabelDisplay="auto"
                            size="small"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            type="number"
                            value={square}
                            onChange={(e) => setSquare(Number(e.target.value))}
                            size="small"
                            sx={{ width: 100 }}
                            InputProps={{ endAdornment: "м²" }}
                        />
                    </Grid>
                </Grid>
            </Paper>

            {/* Тип полотна */}
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">Тип полотна</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl>
                        <RadioGroup value={type} onChange={(e) => setType(Number(e.target.value))}>
                            <FormControlLabel value={1} control={<Radio />} label="Матовый/Глянцевый/Сатин (Белый)" />
                            <FormControlLabel value={1.2} control={<Radio />} label="Широкое полотно (от 3.5м) +20%" />
                            <FormControlLabel value={1.3} control={<Radio />} label="Цветной +20%" />
                            <FormControlLabel value={1.5} control={<Radio />} label="BAUF (безопасный) +50%" />
                        </RadioGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>

            {/* Светильники */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">Светильники</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                            <Slider
                                value={lamps}
                                onChange={(_, val) => setLamps(val as number)}
                                min={0}
                                max={150}
                                size="small"
                                valueLabelDisplay="auto"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                type="number"
                                value={lamps}
                                onChange={(e) => setLamps(Number(e.target.value))}
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
                        <RadioGroup value={lampType} onChange={(e) => setLampType(Number(e.target.value))}>
                            <FormControlLabel value={1} control={<Radio />} label="Классические" />
                            <FormControlLabel value={1.38} control={<Radio />} label="С подсветкой" />
                            <FormControlLabel value={1.5} control={<Radio />} label="Споты" />
                        </RadioGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>

            {/* Люстры */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">Люстры</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                            <Slider
                                value={chandeliers}
                                onChange={(_, val) => setChandeliers(val as number)}
                                min={0}
                                max={15}
                                size="small"
                                valueLabelDisplay="auto"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                type="number"
                                value={chandeliers}
                                onChange={(e) => setChandeliers(Number(e.target.value))}
                                size="small"
                                sx={{ width: 100 }}
                                InputProps={{ endAdornment: "шт" }}
                            />
                        </Grid>
                    </Grid>
                    <FormControl sx={{ mt: 2 }}>
                        <FormLabel>Вид люстры</FormLabel>
                        <RadioGroup value={chandelierType} onChange={(e) => setChandelierType(Number(e.target.value))}>
                            <FormControlLabel value={1} control={<Radio />} label="Классические (собранные)" />
                            <FormControlLabel value={1.5} control={<Radio />} label="Классические (несобранные)" />
                        </RadioGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>

            {/* Дополнительные опции */}
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
                            <Typography variant="body2">Керамогранитная плитка:</Typography>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs>
                                    <Slider
                                        value={porcelainTiles}
                                        onChange={(_, val) => setPorcelainTiles(val as number)}
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

            {/* Итоговая цена */}
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
                    <IconButton onClick={resetCalculator} color="inherit" aria-label="сбросить">
                        <RestartAltIcon />
                    </IconButton>
                </Box>
            </Paper>
        </Container>
    )
}