import s from "./Catalog.module.css"
import {Link} from "react-router-dom"
import {useGetAllProductsQuery} from "@/entities/ceiling/model/ceilingsApi.ts"
import {CatalogSkeleton} from "./CatalogSkeleton"
import {EmptyState} from "@/shared/ui/EmptyState/EmptyState.tsx";
import {ErrorState} from "@/shared/ui/ErrorState/ErrorState.tsx";
import Button from "@mui/material/Button";
import {useSearch} from "@/features/search/model/useSearch.ts";
import {SearchInput} from "@/features/search/ui/SearchInput.tsx";
import {usePagination} from "@/shared/hooks/usePagination.ts";
import {useMemo} from "react";

const typeNames: Record<string, string> = {
    matte: "МАТОВЫЕ",
    glossy: "ГЛЯНЦЕВЫЕ",
    satin: "САТИНОВЫЕ",
    soaring: "ПАРЯЩИЕ",
    twoLevel: "ДВУХУРОВНЕВЫЕ",
    lightLines: "СВЕТОВЫЕ ЛИНИИ",
}

export const Catalog = () => {
    const {data: products, isLoading, error, refetch} = useGetAllProductsQuery()

    const previews = useMemo(() => {
        return Object.keys(typeNames).map((type) => {
            const firstProduct = products?.find((p) => p.type === type)
            return {
                type,
                title: typeNames[type],
                image: firstProduct?.imageUrl || "",
            }
        })
    }, [products])

    const {query, setQuery, filtered} = useSearch(previews)
    const {visibleItems, loadMore, hasMore} = usePagination(filtered, 3)

    if (isLoading) return <CatalogSkeleton/>
    if (error) return <ErrorState
        message="Не удалось загрузить каталог потолков"
        action={
            <Button color="inherit" size="small" onClick={refetch}>
                Повторить
            </Button>
        }
    />

    if (!products || products.length === 0) {
        return <EmptyState/>
    }


    return (
        <div>
            <h2 className={s.catalogHeader}>Каталог натяжных потолков</h2>
            <SearchInput value={query} onChange={setQuery}/>
            <div className={s.cardsWrap}>
                {filtered.length === 0 && <EmptyState message="Ничего не найдено"/>}
                {visibleItems.map((preview) => (
                    <Link key={preview.type} to={`/${preview.type}`}>
                        <div className={s.card}>
                            <h3>{preview.title}</h3>
                            <img className={s.cardImg} src={preview.image} alt={preview.title}/>
                        </div>
                    </Link>
                ))}
            </div>
            {hasMore && (
                <div style={{textAlign: "center", marginTop: "20px"}}>
                    <button onClick={loadMore}>
                        Показать ещё
                    </button>
                </div>
            )}
        </div>
    )
}