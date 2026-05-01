import { useState, useMemo } from "react"

type Item = {
    title: string
}

export const useSearch = <T extends Item>(data: T[]) => {
    const [query, setQuery] = useState("")

    const filtered = useMemo(() => {
        return data.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        )
    }, [data, query])

    return {
        query,
        setQuery,
        filtered,
    }
}