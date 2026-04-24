import './Calculate.css'
import React from "react";
import calcScript from "./CalcScript";


const Calculate = () => {
    return (
        <div className="calc-wrapper">
            <div className="container">
                <form id="form">

                    <div className="heading">
                        <h1 className="heading-title">Калькулятор стоимости натяжного потолка</h1>
                        <p className="heading-desc">Базовая цена: 1 м² = 450 рублей</p>
                    </div>

                    <div className="calc-section">
                        <label className="checkbox-wrapper title-bold section-title .section-title--vertical-center">
                            <span className="title__inline">Площадь квартиры:</span>
                            <input type="number" min="0" max="200" defaultValue="0" id="square-input"
                                   className="title__inline input-short" onClick={calcScript}/>
                            <span className="title__inline">м²</span>
                        </label>
                        <input type="range" id="square-range" className="range-input" min="0" max="200" defaultValue="0"
                               step="1" onClick={calcScript}/>
                    </div>
                    <div className="calc-section">
                        <h4 className="checkbox-wrapper title-bold section-title">Тип полотна</h4>
                        <label className="radio-wrapper" data-name="mobile">
                            <input type="radio" className="radio" name="type" defaultValue="1" defaultChecked
                                   onClick={calcScript}/>
                            <div className="title-lite">Матовый/Глянцевый/Сатин (Белый)</div>
                        </label>
                        <label className="radio-wrapper" data-name="mobile">
                            <input type="radio" className="radio" name="type" defaultValue="1.2"
                                   onClick={calcScript}
                            />
                            <div className="title-lite">
                                Широкое полотно(от 3.5м в ширину)
                                <span className="note">+20% к стоимости</span>
                            </div>
                        </label>
                        <label className="radio-wrapper" data-name="mobile">
                            <input type="radio" className="radio" name="type" defaultValue="1.2"
                                   onClick={calcScript}
                            />
                            <div className="title-lite">
                                Цветной
                                <span className="note">+20% к стоимости</span>
                            </div>
                        </label>
                        <label className="radio-wrapper" data-name="mobile">
                            <input type="radio" className="radio" name="type" defaultValue="1.5" onClick={calcScript}/>
                            <div className="title-lite" onClick={calcScript}>
                                "BAUF"(Безопасно для здоровья)
                                <span className="note">+50% к стоимости</span>
                            </div>
                        </label>
                    </div>

                    <div className="calc-section">
                        <label className="checkbox-wrapper title-bold section-title .section-title--vertical-center">
                            <span className="title__inline">Колличество светильников:</span>
                            <input type="number" min="0" max="150" defaultValue="0" id="square-input-lamp"
                                   className="title__inline input-short" onClick={calcScript}/>
                            <span className="title__inline">Шт</span>
                        </label>
                        <div><p className="heading-desc">Светильник и лампочка не входит в стоимость</p></div>
                        <input type="range" id="square-range-lamp" className="range-input" min="0" max="150"
                               defaultValue="0"
                               step="1" onClick={calcScript}/>
                    </div>
                    <div className="calc-section">
                        <label className="checkbox-wrapper title-bold section-title"> Тип светильников </label>
                        <label className="radio-wrapper">
                            <input type="radio" className="radio" name="lamp" defaultValue="1" defaultChecked
                                   onClick={calcScript}/>
                            <div className="title-lite">Классические
                                <span className="note">диаметр монтажного отверстия не больше 90</span>
                            </div>
                        </label>
                        <label className="radio-wrapper">
                            <input type="radio" className="radio" name="lamp" defaultValue="1.38"
                                   onClick={calcScript}/>
                            <div className="title-lite">
                                С подсветкой
                                <span
                                    className="note">Отдельное подключение(лампочка отдельно, подсветка отдельно)</span>
                            </div>
                        </label>
                        <label className="radio-wrapper">
                            <input type="radio" className="radio" name="lamp" defaultValue="1.5"
                                   onClick={calcScript}/>
                            <div className="title-lite">
                                Споты
                            </div>
                        </label>
                    </div>

                    <div className="calc-section">
                        <label className="checkbox-wrapper title-bold section-title .section-title--vertical-center">
                            <span className="title__inline">Колличество люстр:</span>
                            <input type="number" min="0" max="15" defaultValue="0" id="square-input-сhandelier"
                                   className="title__inline input-short" onClick={calcScript}/>
                            <span className="title__inline">Шт</span>
                        </label>
                        <input type="range" id="square-range-сhandelier" className="range-input" min="0" max="15"
                               defaultValue="0"
                               step="1" onClick={calcScript}/>
                    </div>
                    <div className="calc-section">
                        <label className="checkbox-wrapper title-bold section-title"> Вид люстры </label>
                        <label className="radio-wrapper">
                            <input type="radio" className="radio" name="chandelier" defaultValue="1" defaultChecked
                                   onClick={calcScript}/>
                            <div className="title-lite">Классические
                                <span className="note">В собранном виде</span>
                            </div>
                        </label>
                        <label className="radio-wrapper">
                            <input type="radio" className="radio" name="chandelier" defaultValue="1.5"
                                   onClick={calcScript}/>
                            <div className="title-lite">
                                Классические
                                <span className="note"> Не собранные </span>
                            </div>
                        </label>
                    </div>

                    <div className="calc-section">
                        <label className="checkbox-wrapper title-bold section-title"> Дополнительные опции </label>
                        <label className="radio-wrapper">
                            <input type="checkbox" className="radio" name="additional" defaultValue="1000"/>
                            <div className="title-lite">
                                Мебелированное помещение
                                <span className="note"> +1000р. </span>
                            </div>
                        </label>
                        <label className="radio-wrapper">
                            <input type="checkbox" className="radio" name="additional" defaultValue="1.1"/>
                            <div className="title-lite">
                                Керамическая плитка на стенах
                                <span className="note"> +1500р. </span>
                            </div>
                        </label>

                        <div className="calc-section">
                            <label className="radio-wrapper">
                                <input type="checkbox" className="radio" name="porcelainTiles" defaultValue="1"/>
                                <span className="title__inline"> Керамогранитная плитка: </span>
                                <input type="number" min="0" max="50" defaultValue="0" id="square-input-porcelain-tiles"
                                       className="title__inline input-short" onClick={calcScript}/>
                                <span className="title__inline">м.п.</span>
                            </label>
                            <input type="range" id="square-range-porcelain-tiles" className="range-input" min="0" max="50"
                                   defaultValue="0"
                                   step="1" onClick={calcScript}/>
                        </div>
                    </div>

                    <div className="calc-price">
                        <div className="calc-price-title"> Стоимость натяжного потолка:</div>
                        <div className="calc-price-value">
                            <span id="total-price">0</span>
                            рублей
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

}


export default Calculate;




