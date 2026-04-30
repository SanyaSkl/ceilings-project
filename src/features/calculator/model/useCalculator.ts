import { useState } from "react"

export const useCalculator = () => {
    const [square, setSquare] = useState(0)
    const [type, setType] = useState(1)
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

    const reset = () => {
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

    return {
        square, setSquare,
        type, setType,
        lamps, setLamps,
        lampType, setLampType,
        chandeliers, setChandeliers,
        chandelierType, setChandelierType,
        furniture, setFurniture,
        ceramicTiles, setCeramicTiles,
        porcelainTiles, setPorcelainTiles,
        totalPrice,
        reset,
        constants: { BASE_PRICE, LAMP_PRICE, CHANDELIER_PRICE, PORCELAIN_PRICE }
    }
}