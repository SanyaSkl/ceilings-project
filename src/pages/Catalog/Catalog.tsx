import s from "./Catalog.module.css"
import {Link} from "react-router-dom"
import {useGetAllProductsQuery} from "@/entities/ceiling/model/ceilingsApi.ts"
import {CatalogSkeleton} from "./CatalogSkeleton"

const typeNames: Record<string, string> = {
    matte: "МАТОВЫЕ",
    glossy: "ГЛЯНЦЕВЫЕ",
    satin: "САТИНОВЫЕ",
    soaring: "ПАРЯЩИЕ",
    twoLevel: "ДВУХУРОВНЕВЫЕ",
    lightLines: "СВЕТОВЫЕ ЛИНИИ",
}

export const Catalog = () => {
    const {data: products, isLoading} = useGetAllProductsQuery()

    if (isLoading) return <CatalogSkeleton/>

    const previews = Object.keys(typeNames).map((type) => {
        const firstProduct = products?.find((p) => p.type === type)
        return {
            type,
            title: typeNames[type],
            image: firstProduct?.imageUrl || "",
        }
    })

    return (
        <div>
            <h2 className={s.catalogHeader}>Каталог натяжных потолков</h2>
            <div className={s.cardsWrap}>
                {previews.map((preview) => (
                    <Link key={preview.type} to={`/${preview.type}`}>
                        <div className={s.card}>
                            <h3>{preview.title}</h3>
                            <img className={s.cardImg} src={preview.image} alt={preview.title}/>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}