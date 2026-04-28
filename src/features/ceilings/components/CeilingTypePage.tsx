import {useParams} from "react-router-dom"
import {useGetProductsByTypeQuery} from "../api/ceilingsApi"
import {CeilingCard} from "./CeilingCard"
import {CeilingCardSkeleton} from "./CeilingCardSkeleton"
import {Container, Grid, Typography} from "@mui/material"
import {ceilingTypesInfo} from "../data/mockData"

export const CeilingTypePage = () => {
    const {type} = useParams<{ type: string }>()
    const {data: products, isLoading, error} = useGetProductsByTypeQuery(type || "")

    if (!type) return <div>Не указан тип потолка</div>
    if (error) return <div>Ошибка загрузки данных</div>

    const info = ceilingTypesInfo[type]

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                {info?.header || type}
            </Typography>
            <Typography variant="body1" sx={{mb: 4}}>
                {info?.description}
            </Typography>
            <Grid container spacing={3}>
                {isLoading
                    ? Array.from({length: 4}).map((_, idx) => (
                        <Grid item xs={12} md={6} key={idx}>
                            <CeilingCardSkeleton/>
                        </Grid>
                    ))
                    : products?.map((product) => (
                        <Grid item xs={12} md={6} key={product.id}>
                            <CeilingCard product={product}/>
                        </Grid>
                    ))}
            </Grid>
        </Container>
    )
}