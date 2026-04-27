import {baseApi} from "@/app/baseApi"
import type {CeilingProduct} from "../types/ceiling.types"
import {mockProducts} from "../data/mockData"

export const ceilingsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query<CeilingProduct[], void>({
            queryFn: async () => {
                // имитация задержки сети
                await new Promise((resolve) => setTimeout(resolve, 500))
                return {data: mockProducts}
            },
            providesTags: ["Ceiling"],
        }),
        getProductsByType: builder.query<CeilingProduct[], string>({
            queryFn: async (type) => {
                await new Promise((resolve) => setTimeout(resolve, 500))
                const filtered = mockProducts.filter((p) => p.type === type)
                return {data: filtered}
            },
            providesTags: (_result, _error, type) => [{type: "Ceiling", id: type}],
        }),
    }),
})

export const {useGetAllProductsQuery, useGetProductsByTypeQuery} = ceilingsApi