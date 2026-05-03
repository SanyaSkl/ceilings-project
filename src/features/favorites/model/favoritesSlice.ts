import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const loadFromLS = (): string[] => {
    const data = localStorage.getItem("favorites")
    return data ? JSON.parse(data) : []
}

const saveToLS = (data: string[]) => {
    localStorage.setItem("favorites", JSON.stringify(data))
}

type FavoritesState = {
    ids: string[]
}

const initialState: FavoritesState = {
    ids: loadFromLS(),
}

const slice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<string>) {
            const id = action.payload

            if (state.ids.includes(id)) {
                state.ids = state.ids.filter((i) => i !== id)
            } else {
                state.ids.push(id)
            }

            saveToLS(state.ids)
        },
    },
})

export const { toggleFavorite } = slice.actions
export const favoritesReducer = slice.reducer