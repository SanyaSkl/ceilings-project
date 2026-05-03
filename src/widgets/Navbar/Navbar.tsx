import s from "./Navbar.module.css";
import {Link} from "react-router-dom";
import phone from "@assets/Images/phone.png"
import Button from "@mui/material/Button";
import {Path} from "@/app/routing"

export const Navbar = () => {
    return (
        <nav>
            <div className={s.nav}>
                <div className={s.number}>
                    <img className={s.phoneImg} src={phone} alt={"phone"}/> +7980-321-55-41
                    <img className={s.phoneImg} src={phone} alt={"phone"}/> +7904-535-60-60
                </div>
                <h2 className={s.tagline}>Мы едем к вашим соседям</h2>
                <Button variant="contained" component={Link} to={Path.Catalog}>Каталог</Button>
                <Button variant="contained" component={Link} to={Path.Calculate}>Калькулятор</Button>
                <Button variant="contained" component={Link} to={Path.NotFound}>Фото</Button>
                <Button variant="contained" component={Link} to={Path.NotFound}>Услуги</Button>

                {/*<Link to="/catalog" className={s.navMenu}>Каталог</Link>*/}

                {/*<Link to="/calculate" className={s.navMenu}>Калькулятор</Link>*/}

            </div>
        </nav>
    )
}