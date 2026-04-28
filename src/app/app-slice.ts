import { createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit"

export type RequestStatus = "idle" | "loading" | "success" | "failed"

export const appSlice = createSlice({
    name: "app",
    initialState: {
        status: "idle" as RequestStatus,
        error: null as string | null,
        themeMode: "light" as "light" | "dark",
    },
    selectors: {
        selectStatus: (state) => state.status,
        selectAppError: (state) => state.error,
        selectThemeMode: (state) => state.themeMode,
    },
    reducers: (create) => ({
        setAppStatusAC: create.reducer<{ status: RequestStatus }>((state, action) => {
            state.status = action.payload.status
        }),
        setAppErrorAC: create.reducer<{ error: string | null }>((state, action) => {
            state.error = action.payload.error
        }),
        changeThemeModeAC: create.reducer<{ themeMode: "light" | "dark" }>((state, action) => {
            state.themeMode = action.payload.themeMode
        }),
    }),
    extraReducers: (builder) => {
        builder
            .addMatcher(isPending, (state) => {
                state.status = "loading"
            })
            .addMatcher(isFulfilled, (state) => {
                state.status = "success"
            })
            .addMatcher(isRejected, (state) => {
                state.status = "failed"
            })
    },
})

export type ThemeMode = "dark" | "light"


export const { setAppStatusAC, setAppErrorAC, changeThemeModeAC } = appSlice.actions
export const { selectStatus, selectAppError, selectThemeMode } = appSlice.selectors
export const appReducer = appSlice.reducer