import {useMemo, useState} from "react"
import {useDebounce} from "@/shared/hooks";

type Item = {
    title: string
}

export const useSearch = <T extends Item>(data: T[]) => {
    const [query, setQuery] = useState("")

    const debouncedQuery = useDebounce(query, 500)


    const filtered = useMemo(() => {
        return data.filter((item) =>
            item.title.toLowerCase().includes(debouncedQuery.toLowerCase())
        )
    }, [data, debouncedQuery])

    return {
        query,
        setQuery,
        filtered,
    }
}

