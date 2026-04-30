import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Box,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { HelpPopover } from "./HelpPopover.tsx"

interface Props {
    value: number
    onChange: (val: number) => void
}

export const TypeSelector = ({ value, onChange }: Props) => {
    const helpWide = "Размерная сетка у полотен потолков 3.5, 5, 5.8 метров, соответственно если полотно шире стандартного 3.5, то и цена выше."
    const helpColor = "Выбор любого цвета из каталога, кроме белого. Цена увеличивается на 20%."
    const helpBauf = "Немецкий экологичный материал BAUF – высокая прочность, безопасность, без запаха. Цена выше на 50%."

    return (
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Тип полотна</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FormControl>
                    <RadioGroup value={value} onChange={(e) => onChange(Number(e.target.value))}>
                        <FormControlLabel value={1} control={<Radio />} label="Матовый/Глянцевый/Сатин (Белый)" />

                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <FormControlLabel value={1.2} control={<Radio />} label="Широкое полотно (от 3.5м) +20%" />
                            <HelpPopover text={helpWide} />
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <FormControlLabel value={1.3} control={<Radio />} label="Цветной +20%" />
                            <HelpPopover text={helpColor} />
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <FormControlLabel value={1.5} control={<Radio />} label="BAUF (безопасный) +50%" />
                            <HelpPopover text={helpBauf} />
                        </Box>
                    </RadioGroup>
                </FormControl>
            </AccordionDetails>
        </Accordion>
    )
}