import { Link } from "react-router-dom"
import s from "./../Catalog.module.css"
import { FavoriteButton } from "@/features/favorites/ui/FavoriteButton"

type Props = {
    type: string
    title: string
    image: string
}

export const CatalogCard = ({ type, title, image }: Props) => {
    return (
        <div className={s.card}>
            <FavoriteButton id={type} />

            <Link to={`/${type}`}>
                <h3>{title}</h3>
                <img className={s.cardImg} src={image} alt={title} />
            </Link>
        </div>
    )
}