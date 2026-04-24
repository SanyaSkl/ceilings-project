import classes from "./TypesCellings.module.css";
import soarHall from "../../../assets/Images/soaring/soarHall.jpg";
import soarBedroom from "../../../assets/Images/soaring/soarBadroom.jpg";
import soarHallway from "../../../assets/Images/soaring/soarHallway.jpg";
import soarKitchen from "../../../assets/Images/soaring/soarKitchen.jpg";


const Soaring = () => {
    return (
        <div className={classes.ceilingViewsContainer}>
            <div className={classes.ceilingViewTextContainer}>
                <h1 className={classes.ceilingTypeHeader}>Парящие натяжные потолки</h1>
                <br/>
                <h3>Подойдут для помещений с низкими потолками. Благодаря подсветке, зрительно вытягивают пространство.
                    Позволят сэкономить на светильниках и сделают помещение уникальным.</h3>
                <br/>
                <p className={classes.descriptionText}>Парящие линии по периметру комнаты (Смонтированный с использованием специального профиля,
                    в котором оставлена ниша для установки светодиодной ленты, такой потолок как будто висит в воздухе
                    не соприкасаясь со стенами. Благодаря дополнительному освещению по всему периметру комнаты
                    в ней не остается темных углов.).</p>
            </div>
            <br/>
            <div>
                <div className={classes.cardsWrap}>
                    <div className={classes.card}>
                        <img className={classes.cardImg} src={soarHall} alt={"soarHall"}/>
                        <h3>Парящий натяжной потолок в зале</h3>
                        <p>площадь - 19 м2; обработка угла - 4 шт.; профиль - 18 м;
                            заготовка под люстру и установка люстры - 1 шт.; цвет - белый;
                            труба отопления - 2 шт</p>
                        <br/>
                        <h4>Общая стоимость: 16300 руб.</h4>
                    </div>
                    <div className={classes.card}>
                        <img className={classes.cardImg} src={soarBedroom} alt={"soarBedroom"}/>
                        <h3>Парящий натяжной потолок в спальне</h3>
                        <p>площадь - 11 м2; обработка угла - 4 шт.; профиль - 13 м;
                            заготовка под люстру и установка люстры - 1 шт.; цвет - белый;</p>
                        <br/>
                        <h4>Общая стоимость: 11400 руб.</h4>
                    </div>
                    <div className={classes.card}>
                        <img className={classes.cardImg} src={soarHallway} alt={"soarHallway"}/>
                        <h3>Парящий натяжной потолок в коридоре</h3>
                        <p>площадь - 6.3 м2; обработка угла - 4 шт.; профиль - 12 м;
                            установка точечных светильников - 4 шт.; цвет - белый;</p>
                        <br/>
                        <h4>Общая стоимость: 11200 </h4>
                    </div>
                    <div className={classes.card}>
                        <img className={classes.cardImg} src={soarKitchen} alt={"soarKitchen"}/>
                        <h3>Парящий натяжной потолок в кухне</h3>
                        <p>площадь - 9 м2; обработка угла - 4 шт.; профиль - 11.6 м;
                            заготовка под люстру и установка люстры - 1 шт.;
                            установка точечных светильников - 4 шт цвет - белый;</p>
                        <br/>
                        <h4>Общая стоимость: 12200 руб.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Soaring