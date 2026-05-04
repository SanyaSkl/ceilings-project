import { useParams } from "react-router-dom"
import { CeilingCardSkeleton } from "../../entities/ceiling/ui/CeilingCardSkeleton"
import { Container, Grid, Typography } from "@mui/material"
import { useGetProductsByTypeQuery } from "@/entities/ceiling/model/ceilingsApi"
import { CeilingCard, ceilingTypesInfo } from "@/entities/ceiling"
import { PageNotFound } from "@/pages"
import { ErrorState } from "@/shared/ui/ErrorState/ErrorState"

export const CeilingTypePage = () => {
    const { type } = useParams<{ type: string }>()

    // Определяем, нужно ли пропускать запрос
    const isValidType = type && ceilingTypesInfo[type]

    const {
        data: products,
        isLoading,
        error
    } = useGetProductsByTypeQuery(type || "", {
        skip: !isValidType     // ← запрос выполняется только если тип существует
    })

    if (!type || !ceilingTypesInfo[type]) {
        return <PageNotFound />
    }

    // Обработка ошибки с использованием ErrorState
    if (error) {
        return (
            <ErrorState
                title="Ошибка загрузки"
                message="Не удалось загрузить товары этого типа. Попробуйте позже."
            />
        )
    }

    const info = ceilingTypesInfo[type]

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                {info?.header || type}
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
                {info?.description}
            </Typography>
            <Grid container spacing={3}>
                {isLoading
                    ? Array.from({ length: 4 }).map((_, idx) => (
                        <Grid item xs={12} md={6} key={idx}>
                            <CeilingCardSkeleton />
                        </Grid>
                    ))
                    : products?.map((product) => (
                        <Grid item xs={12} md={6} key={product.id}>
                            <CeilingCard product={product} />
                        </Grid>
                    ))}
            </Grid>
        </Container>
    )
}