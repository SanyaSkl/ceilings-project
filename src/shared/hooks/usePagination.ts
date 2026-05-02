import {useEffect, useState} from "react"

export const usePagination = <T>(data: T[], step = 3) => {
    const [visibleCount, setVisibleCount] = useState(step)

    const visibleItems = data.slice(0, visibleCount)

    const loadMore = () => {
        setVisibleCount((prev) => prev + step)
    }

    const hasMore = visibleCount < data.length

    useEffect(() => {
        setVisibleCount(step)
    }, [data, step])

    return {
        visibleItems,
        loadMore,
        hasMore,
    }
}