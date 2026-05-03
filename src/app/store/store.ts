import { configureStore } from "@reduxjs/toolkit"
import { appReducer, appSlice } from "./app-slice.ts"
import { baseApi } from "@/shared/api/baseApi.ts"
import {favoritesReducer} from "@/features/favorites/model/favoritesSlice.ts";

export const store = configureStore({
    reducer: {
        [appSlice.name]: appReducer,
        [baseApi.reducerPath]: baseApi.reducer,
        favorites: favoritesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// для отладки в консоли
// @ts-ignore
window.store = store