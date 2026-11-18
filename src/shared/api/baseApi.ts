import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { handleError } from "@/shared/lib/handleError"

const API_URL = import.meta.env.VITE_BASE_URL

if (import.meta.env.PROD && !API_URL) {
    console.error("⚠️ VITE_BASE_URL не задан. API-запросы упадут.")
}

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: async (args, api, extraOptions) => {
        const result = await fetchBaseQuery({
            baseUrl: API_URL || "http://localhost:5000",
            timeout: 60000,
        })(args, api, extraOptions)
        handleError(api, result)
        return result
    },
    endpoints: () => ({}),
    tagTypes: ["Ceiling"],
})