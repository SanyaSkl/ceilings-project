import content from "../../assets/Images/contentImg.jpg";
import s from "./HomePage.module.css"


export const HomePage = () => {
    return (
        <div>
            <div className={s.container}>
                <img className={s.content} src={content} alt={"content"}/>
                <div className={s.centered}>
                    <h1>
                        Закажите Натяжные Потолки<br/>
                        в Старом осколе<br/>
                        от 270р/м2<br/>
                        замер бесплатный!!!<br/>
                        +7980 - 321 - 55 - 41<br/>
                        +7904 - 535 - 60 - 60
                    </h1>
                </div>
            </div>
        </div>
    )
}