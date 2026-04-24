import classes from "./TypesCellings.module.css";
import satHall from "../../../assets/Images/satin/satHall.jpg";
import satBedroom from "../../../assets/Images/satin/satBedroom.jpg";
import satHallway from "../../../assets/Images/satin/satHallway.jpg";
import satKitchen from "../../../assets/Images/satin/satKitchen.jpg";


const Satin = () => {
    return (
        <div className={classes.ceilingViewsContainer}>
            <div className={classes.ceilingViewTextContainer}>
                <h1 className={classes.ceilingTypeHeader}>Сатиновые натяжные потолки</h1>
                <br/>
                <h3>Сатиновые потолки по текстуре схожи с матовым полотном, но при этом лишены зернистости.
                    Мягко отражают дневной и искусственный свет, играя оттенками.</h3>
                <br/>
                <p className={classes.descriptionText}>Многие думают, что этот вид материала потолка выглядит как сатиновая ткань, но это не так.
                    Фактура этой пленки является средним вариантом между матовой и глянцевой поверхностью,
                    объединяя в себе их плюсы. Отсутствие зеркального отражения делает его более спокойным
                    и оставляет на нем меньше разводов при протирании (актуально для ванных комнат),
                    а более гладкая поверхность позволяет легче смывать с него пыль, грязь и брызги
                    (что является плюсом, в первую очередь, для кухонь).
                    Несмотря на перечисленные плюсы данный вид потолков из-за немного необычного вида пользуется
                    меньшей популярностью в отличие от матовых и глянцевых. Поэтому «пощупать его в живую»
                    проще пригласив нашего специалиста на бесплатный замер. Он сможет показать вам подробный
                    каталог цветов и фактур, а также даст точную оценку стоимости работ и любых выбранных
                    вами материалов.</p>
            </div>
            <br/>
            <div>
                <div className={classes.cardsWrap}>
                    <div className={classes.card}>
                        <img className={classes.cardImg} src={satHall} alt={"satHall"}/>
                        <h3>Матовый натяжной потолок в зале</h3>
                        <p>площадь - 19 м2; обработка угла - 4 шт.; профиль - 18 м;
                            заготовка под люстру и установка люстры - 1 шт.; цвет - белый;
                            труба отопления - 2 шт</p>
                        <br/>
                        <h4>Общая стоимость: 8500 руб.</h4>
                    </div>
                    <div className={classes.card}>
                        <img className={classes.cardImg} src={satBedroom} alt={"satBedroom"}/>
                        <h3>Матовый натяжной потолок в спальне</h3>
                        <p>площадь - 11 м2; обработка угла - 4 шт.; профиль - 13 м;
                            заготовка под люстру и установка люстры - 1 шт.; цвет - белый;</p>
                        <br/>
                        <h4>Общая стоимость: 6500 руб.</h4>
                    </div>
                    <div className={classes.card}>
                        <img className={classes.cardImg} src={satHallway} alt={"satHallway"}/>
                        <h3>Матовый натяжной потолок в коридоре</h3>
                        <p>площадь - 6.3 м2; обработка угла - 4 шт.; профиль - 12 м;
                            установка точечных светильников - 4 шт.; цвет - белый;</p>
                        <br/>
                        <h4>Общая стоимость: 6000 </h4>
                    </div>
                    <div className={classes.card}>
                        <img className={classes.cardImg} src={satKitchen} alt={"satKitchen"}/>
                        <h3>Матовый натяжной потолок в кухне</h3>
                        <p>площадь - 9 м2; обработка угла - 4 шт.; профиль - 11.6 м;
                            заготовка под люстру и установка люстры - 1 шт.;
                            установка точечных светильников - 4 шт цвет - белый;</p>
                        <br/>
                        <h4>Общая стоимость: 7500 руб.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Satin