import s from "./CeilingCard.module.css"
import type {CeilingProduct} from "../types/ceiling.types"

interface Props {
    product: CeilingProduct
}

export const CeilingCard = ({product}: Props) => {
    const details = product.description.split(";").filter((d) => d.trim())

    return (
        <div className={s.card}>
            <img className={s.cardImg} src={product.imageUrl} alt={product.title}/>
            <h3>{product.title}</h3>
            <ul>
                {details.map((detail, idx) => (
                    <li key={idx}>{detail.trim()}</li>
                ))}
            </ul>
            {product.price > 0 ? (
                <div className={s.price}>Стоимость: {product.price.toLocaleString("ru")} руб.</div>
            ) : (
                <div className={s.price}>Цена рассчитывается индивидуально</div>
            )}
        </div>
    )
}