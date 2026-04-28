import {Container} from "@mui/material"
import {useCalculator} from "./hooks/useCalculator"
import {CalculatorHeader} from "./components/CalculatorHeader"
import {AreaSelector} from "./components/AreaSelector"
import {TypeSelector} from "./components/TypeSelector"
import {LampsSelector} from "./components/LampsSelector"
import {ChandeliersSelector} from "./components/ChandeliersSelector"
import {AdditionalOptions} from "./components/AdditionalOptions"
import {TotalPricePanel} from "./components/TotalPricePanel"

export const Calculate = () => {
    const {
        square,
        setSquare,
        type,
        setType,
        lamps,
        setLamps,
        lampType,
        setLampType,
        chandeliers,
        setChandeliers,
        chandelierType,
        setChandelierType,
        furniture,
        setFurniture,
        ceramicTiles,
        setCeramicTiles,
        porcelainTiles,
        setPorcelainTiles,
        totalPrice,
        reset,
        constants,
    } = useCalculator()

    return (
        <Container maxWidth="md" sx={{py: 4}}>
            <CalculatorHeader basePrice={constants.BASE_PRICE}/>

            <AreaSelector value={square} onChange={setSquare}/>

            <TypeSelector value={type} onChange={setType}/>

            <LampsSelector
                count={lamps}
                onCountChange={setLamps}
                typeValue={lampType}
                onTypeChange={setLampType}
            />

            <ChandeliersSelector
                count={chandeliers}
                onCountChange={setChandeliers}
                typeValue={chandelierType}
                onTypeChange={setChandelierType}
            />

            <AdditionalOptions
                furniture={furniture}
                setFurniture={setFurniture}
                ceramicTiles={ceramicTiles}
                setCeramicTiles={setCeramicTiles}
                porcelainTiles={porcelainTiles}
                setPorcelainTiles={setPorcelainTiles}
            />

            <TotalPricePanel total={totalPrice()} onReset={reset}/>
        </Container>
    )
}