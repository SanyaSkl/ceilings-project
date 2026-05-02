import s from "./Catalog.module.css"
import {useMemo} from "react"
import {useGetAllProductsQuery} from "@/entities/ceiling/model/ceilingsApi"
import {CatalogSkeleton} from "./CatalogSkeleton"
import Button from "@mui/material/Button"
import {useSearch} from "@/features/search/model/useSearch"
import {usePagination} from "@/shared/hooks/usePagination"
import {CatalogList} from "./CatalogCard/CatalogList.tsx"
import {EmptyState} from "@/shared/ui/EmptyState/EmptyState.tsx";
import {ErrorState} from "@/shared/ui/ErrorState/ErrorState.tsx";
import {TextField} from "@mui/material";

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

    if (error) {
        return (
            <ErrorState
                message="Не удалось загрузить каталог потолков"
                action={<Button onClick={refetch}>Повторить</Button>}
            />
        )
    }

    if (!products || products.length === 0) {
        return <EmptyState/>
    }

    return (
        <div>
            <h2 className={s.catalogHeader}>Каталог натяжных потолков</h2>

            <div className={s.searchWrap}>
                <TextField
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    label="Поиск"
                    variant="outlined"
                />
            </div>

            {filtered.length === 0 && <EmptyState message="Ничего не найдено"/>}

            <CatalogList items={visibleItems}/>

            {hasMore && (
                <div className={s.loadMore}>
                    <button onClick={loadMore}>Показать ещё</button>
                </div>
            )}
        </div>
    )
}