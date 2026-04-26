import { configureStore } from "@reduxjs/toolkit"
import { appReducer, appSlice } from "./app-slice"

export const store = configureStore({
    reducer: {
        [appSlice.name]: appReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Для отладки в консоли
// @ts-ignore
window.store = store