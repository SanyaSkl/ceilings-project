import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { handleError } from "@/shared/lib/handleError"

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: async (args, api, extraOptions) => {
        const result = await fetchBaseQuery({
            baseUrl: import.meta.env.VITE_BASE_URL || "http://localhost:5000", // ← порт 5000
        })(args, api, extraOptions)
        handleError(api, result)
        return result
    },
    endpoints: () => ({}),
    tagTypes: ["Ceiling"],
})