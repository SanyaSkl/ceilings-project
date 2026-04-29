import { setAppErrorAC } from "@/app/store/app-slice.ts"
import { isErrorWithMessage } from "./isErrorWithMessage.ts"
import { BaseQueryApi, FetchBaseQueryError, FetchBaseQueryMeta, QueryReturnValue } from "@reduxjs/toolkit/query/react"

export const handleError = (
    api: BaseQueryApi,
    result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>,
) => {
    let error = "Something went wrong"

    if (result.error) {
        switch (result.error.status) {
            case "FETCH_ERROR":
            case "PARSING_ERROR":
            case "CUSTOM_ERROR":
            case "TIMEOUT_ERROR":
                error = result.error.error
                break
            case 403:
                error = "403 Forbidden. Check API-KEY"
                break
            case 400:
            case 401:
                if (isErrorWithMessage(result.error.data)) {
                    error = result.error.data.message
                } else {
                    error = JSON.stringify(result.error.data)
                }
                break
            default:
                if (result.error.status >= 500 && result.error.status < 600) {
                    error = "Server error, try again later"
                } else {
                    error = JSON.stringify(result.error)
                }
        }
        api.dispatch(setAppErrorAC({ error }))
    }

    const data = result.data as { resultCode?: number; messages?: string[] } | undefined
    if (data?.resultCode && data.resultCode !== 0) {
        const message = data.messages?.[0] || error
        api.dispatch(setAppErrorAC({ error: message }))
    }
}