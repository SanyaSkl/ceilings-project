import { useAppDispatch, useAppSelector } from "@/shared/hooks"
import { toggleFavorite } from "../model/favoritesSlice"
import { selectFavorites } from "../model/selectors"

type Props = {
    id: string
}

export const FavoriteButton = ({ id }: Props) => {
    const dispatch = useAppDispatch()
    const favorites = useAppSelector(selectFavorites)

    const isFavorite = favorites.includes(id)

    return (
        <button
            onClick={() => dispatch(toggleFavorite(id))}
            style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 20,
            }}
        >
            {isFavorite ? "❤️" : "🤍"}
        </button>
    )
}