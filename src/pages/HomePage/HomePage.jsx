import content from "../assets/Images/contentImg.jpg";
import React from "react";
import classes from "./HomePage.module.css"


const HomePage = () => {
    return (
        <div>
            <div className={classes.container}>
                <img className={classes.content} src={content} alt={"content"}/>
                <div className={classes.centered}>
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

export default HomePage;