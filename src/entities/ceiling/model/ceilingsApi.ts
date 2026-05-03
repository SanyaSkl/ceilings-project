import {baseApi} from "@/shared/api/baseApi"
import type {CeilingProduct} from "./ceiling.types"

export const ceilingsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query<CeilingProduct[], void>({
            query: () => "/ceilings",
            providesTags: ["Ceiling"],
        }),
        getProductsByType: builder.query<CeilingProduct[], string>({
            query: (type) => `/ceilings?type=${type}`,
            providesTags: (_result, _error, type) => [{type: "Ceiling", id: type}],
        }),
    }),
})

export const {useGetAllProductsQuery, useGetProductsByTypeQuery} = ceilingsApi