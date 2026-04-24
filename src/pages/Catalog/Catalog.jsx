import React from "react";
import classes from "./Catalog.module.css"
import matte from "./../../assets/Images/matte/mat1.jpg"
import glossy from "./../../assets/Images/glossy/glossy1.jpg"
import satin from "./../../assets/Images/satin/sat1.jpg"
import soaring from "./../../assets/Images/soaring/soaring1.jpg"
import twoLevel from "./../../assets/Images/two-level/two-level1.jpg"
import lightLines from "./../../assets/Images/light lines/light lines1.jpg"
import {Link} from "react-router-dom";

const Catalog = () => {
    return (
        <div>
            <h2 className={classes.catalogHeader}>Каталог натяжных потолков</h2>
            <div className={classes.cardsWrap}>
                <Link to="/matte">
                <div className={classes.card}>
                    <h3>МАТОВЫЕ</h3>
                    <img className={classes.cardImg} src={matte} alt={"matte"}/>
                </div>
                </Link>
                <Link to="/glossy">
                <div className={classes.card}>
                    <h3>ГЛЯНЦЕВЫЕ</h3>
                    <img className={classes.cardImg} src={glossy} alt={"glossy"}/>
                </div>
                    </Link>
                <Link to="/satin">
                <div className={classes.card}>
                    <h3>САТИНОВЫЕ</h3>
                    <img className={classes.cardImg} src={satin} alt={"satin"}/>
                </div>
                    </Link>
                <Link to="/soaring">
                <div className={classes.card}>
                    <h3>ПАРЯЩИЕ</h3>
                    <img className={classes.cardImg} src={soaring} alt={"soaring"}/>
                </div>
                    </Link>
                <Link to="/twoLevel">
                <div className={classes.card}>
                    <h3>ДВУХУРОВНЕВЫЕ</h3>
                    <img className={classes.cardImg} src={twoLevel} alt={"two-level"}/>
                </div>
                    </Link>
                <Link to="/lightLines">
                <div className={classes.card}>
                    <h3>СВЕТОВЫЕ ЛИНИИ</h3>
                    <img className={classes.cardImg} src={lightLines} alt={"light lines"}/>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Catalog;