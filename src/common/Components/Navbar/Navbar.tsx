import s from "./Navbar.module.css";
import {Link} from "react-router-dom";
import phone from "@assets/Images/phone.png"

export const Navbar = () => {
    return (
        <nav>
            <div className={s.nav}>
                <div className={s.number}>
                    <img className={s.phoneImg} src={phone} alt={"phone"}/> +7980-321-55-41
                    <img className={s.phoneImg} src={phone} alt={"phone"}/> +7904-535-60-60
                </div>
                <h2 className={s.tagline}>Мы едем к вашим соседям</h2>
                <Link to="/catalog" className={s.navMenu}>Каталог</Link>
                <Link to="/services" className={s.navMenu}>Услуги</Link>
                <Link to="/calculate" className={s.navMenu}>Калькулятор</Link>
                <Link to="/photo" className={s.navMenu}>Фото</Link>
            </div>
        </nav>
    )
}