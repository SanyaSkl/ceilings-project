import {CatalogCard} from "./CatalogCard.tsx"
import s from "./../Catalog.module.css"

type Item = {
    type: string
    title: string
    image: string
}

type Props = {
    items: Item[]
}

export const CatalogList = ({items}: Props) => {
    return (
        <div className={s.cardsWrap}>
            {items.map((item: any) => (
                <CatalogCard
                    key={item.type}
                    type={item.type}
                    title={item.title}
                    image={item.image}
                />
            ))}
        </div>
    )
}