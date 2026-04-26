import { useState } from 'react'
import './Calculate.css'

export const Calculate = () => {
    // Состояния
    const [square, setSquare] = useState(0)
    const [type, setType] = useState(1)           // 1: белый, 1.2: широкий/цветной, 1.5: BAUF
    const [lamps, setLamps] = useState(0)
    const [lampType, setLampType] = useState(1)   // 1: классические, 1.38: с подсветкой, 1.5: споты
    const [chandeliers, setChandeliers] = useState(0)
    const [chandelierType, setChandelierType] = useState(1) // 1: собранные, 1.5: несобранные
    const [furniture, setFurniture] = useState(false)
    const [ceramicTiles, setCeramicTiles] = useState(false)
    const [porcelainTiles, setPorcelainTiles] = useState(0)

    // Константы
    const BASE_PRICE = 550
    const LAMP_PRICE = 500
    const CHANDELIER_PRICE = 1000
    const PORCELAIN_PRICE = 500 // цена за м.п.

    // Расчёт
    const totalPrice = () => {
        let total = BASE_PRICE * square * type
        total += LAMP_PRICE * lamps * lampType
        total += CHANDELIER_PRICE * chandeliers * chandelierType
        if (furniture) total += 1000
        if (ceramicTiles) total += 1500
        total += porcelainTiles * PORCELAIN_PRICE
        return total
    }

    const formattedTotal = totalPrice().toLocaleString('ru')

    return (
        <div className="calc-wrapper">
            <div className="container">
                <div className="heading">
                    <h1 className="heading-title">Калькулятор стоимости натяжного потолка</h1>
                    <p className="heading-desc">Базовая цена: 1 м² = 550 рублей</p>
                </div>

                {/* Площадь */}
                <div className="calc-section">
                    <label className="checkbox-wrapper title-bold section-title">
                        <span className="title__inline">Площадь помещения:</span>
                        <input
                            type="number"
                            min="0"
                            max="200"
                            value={square}
                            onChange={(e) => setSquare(Number(e.target.value))}
                            className="title__inline input-short"
                        />
                        <span className="title__inline">м²</span>
                    </label>
                    <input
                        type="range"
                        className="range-input"
                        min="0"
                        max="200"
                        value={square}
                        onChange={(e) => setSquare(Number(e.target.value))}
                    />
                </div>

                {/* Тип полотна */}
                <div className="calc-section">
                    <h4 className="title-bold section-title">Тип полотна</h4>
                    <label className="radio-wrapper">
                        <input type="radio" name="type" checked={type === 1} onChange={() => setType(1)} />
                        <div className="title-lite">Матовый/Глянцевый/Сатин (Белый)</div>
                    </label>
                    <label className="radio-wrapper">
                        <input type="radio" name="type" checked={type === 1.2} onChange={() => setType(1.2)} />
                        <div className="title-lite">
                            Широкое полотно (от 3.5м в ширину)
                            <span className="note">+20% к стоимости</span>
                        </div>
                    </label>
                    <label className="radio-wrapper">
                        <input type="radio" name="type" checked={type === 1.2} onChange={() => setType(1.2)} />
                        <div className="title-lite">
                            Цветной
                            <span className="note">+20% к стоимости</span>
                        </div>
                    </label>
                    <label className="radio-wrapper">
                        <input type="radio" name="type" checked={type === 1.5} onChange={() => setType(1.5)} />
                        <div className="title-lite">
                            "BAUF" (Безопасно для здоровья)
                            <span className="note">+50% к стоимости</span>
                        </div>
                    </label>
                </div>

                {/* Количество светильников */}
                <div className="calc-section">
                    <label className="checkbox-wrapper title-bold">
                        <span className="title__inline">Количество светильников:</span>
                        <input
                            type="number"
                            min="0"
                            max="150"
                            value={lamps}
                            onChange={(e) => setLamps(Number(e.target.value))}
                            className="title__inline input-short"
                        />
                        <span className="title__inline">Шт</span>
                    </label>
                    <p className="heading-desc">Светильник и лампочка не входят в стоимость</p>
                    <input
                        type="range"
                        className="range-input"
                        min="0"
                        max="150"
                        value={lamps}
                        onChange={(e) => setLamps(Number(e.target.value))}
                    />
                </div>

                {/* Тип светильников */}
                <div className="calc-section">
                    <h4 className="title-bold section-title">Тип светильников</h4>
                    <label className="radio-wrapper">
                        <input type="radio" name="lampType" checked={lampType === 1} onChange={() => setLampType(1)} />
                        <div className="title-lite">
                            Классические
                            <span className="note">диаметр монтажного отверстия не больше 90</span>
                        </div>
                    </label>
                    <label className="radio-wrapper">
                        <input type="radio" name="lampType" checked={lampType === 1.38} onChange={() => setLampType(1.38)} />
                        <div className="title-lite">
                            С подсветкой
                            <span className="note">Отдельное подключение (лампочка отдельно, подсветка отдельно)</span>
                        </div>
                    </label>
                    <label className="radio-wrapper">
                        <input type="radio" name="lampType" checked={lampType === 1.5} onChange={() => setLampType(1.5)} />
                        <div className="title-lite">Споты</div>
                    </label>
                </div>

                {/* Количество люстр */}
                <div className="calc-section">
                    <label className="checkbox-wrapper title-bold">
                        <span className="title__inline">Количество люстр:</span>
                        <input
                            type="number"
                            min="0"
                            max="15"
                            value={chandeliers}
                            onChange={(e) => setChandeliers(Number(e.target.value))}
                            className="title__inline input-short"
                        />
                        <span className="title__inline">Шт</span>
                    </label>
                    <input
                        type="range"
                        className="range-input"
                        min="0"
                        max="15"
                        value={chandeliers}
                        onChange={(e) => setChandeliers(Number(e.target.value))}
                    />
                </div>

                {/* Вид люстры */}
                <div className="calc-section">
                    <h4 className="title-bold section-title">Вид люстры</h4>
                    <label className="radio-wrapper">
                        <input type="radio" name="chandelierType" checked={chandelierType === 1} onChange={() => setChandelierType(1)} />
                        <div className="title-lite">
                            Классические
                            <span className="note">В собранном виде</span>
                        </div>
                    </label>
                    <label className="radio-wrapper">
                        <input type="radio" name="chandelierType" checked={chandelierType === 1.5} onChange={() => setChandelierType(1.5)} />
                        <div className="title-lite">
                            Классические
                            <span className="note">Не собранные</span>
                        </div>
                    </label>
                </div>

                {/* Дополнительные опции */}
                <div className="calc-section">
                    <h4 className="title-bold section-title">Дополнительные опции</h4>
                    <label className="radio-wrapper">
                        <input type="checkbox" className="radio" checked={furniture} onChange={(e) => setFurniture(e.target.checked)} />
                        <div className="title-lite">
                            Мебелированное помещение
                            <span className="note">+1000р.</span>
                        </div>
                    </label>
                    <label className="radio-wrapper">
                        <input type="checkbox" className="radio" checked={ceramicTiles} onChange={(e) => setCeramicTiles(e.target.checked)} />
                        <div className="title-lite">
                            Керамическая плитка на стенах
                            <span className="note">+1500р.</span>
                        </div>
                    </label>

                    <div className="calc-section">
                        <label className="radio-wrapper">
                            <input type="checkbox" className="radio" checked={porcelainTiles > 0} onChange={(e) => setPorcelainTiles(e.target.checked ? 1 : 0)} />
                            <span className="title__inline">Керамогранитная плитка:</span>
                            <input
                                type="number"
                                min="0"
                                max="50"
                                value={porcelainTiles}
                                onChange={(e) => setPorcelainTiles(Number(e.target.value))}
                                className="title__inline input-short"
                            />
                            <span className="title__inline">м.п.</span>
                        </label>
                        <input
                            type="range"
                            className="range-input"
                            min="0"
                            max="50"
                            value={porcelainTiles}
                            onChange={(e) => setPorcelainTiles(Number(e.target.value))}
                        />
                    </div>
                </div>

                {/* Итоговая стоимость */}
                <div className="calc-price">
                    <div className="calc-price-title">Стоимость натяжного потолка:</div>
                    <div className="calc-price-value">
                        <span>{formattedTotal}</span> рублей
                    </div>
                </div>
            </div>
        </div>
    )
}