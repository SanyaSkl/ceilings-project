import { Link } from "react-router-dom"
import s from "./../Catalog.module.css"

type Props = {
    type: string
    title: string
    image: string
}

export const CatalogCard = ({ type, title, image }: Props) => {
    return (
        <div className={s.card}>
            <Link to={`/${type}`}>
                <h3>{title}</h3>
                <img className={s.cardImg} src={image} alt={title} />
            </Link>
        </div>
    )
}