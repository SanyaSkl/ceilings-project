import {useParams} from "react-router-dom"
import {CeilingCardSkeleton} from "../../entities/ceiling/ui/CeilingCardSkeleton.tsx"
import {Container, Grid, Typography} from "@mui/material"
import {useGetProductsByTypeQuery} from "@/entities/ceiling/model/ceilingsApi.ts";
import {ceilingTypesInfo} from "@/entities/ceiling/model/mockData.ts";
import {CeilingCard} from "@/entities/ceiling";
import {PageNotFound} from "@/pages";


export const CeilingTypePage = () => {
    const {type} = useParams<{ type: string }>()
    const {data: products, isLoading, error} = useGetProductsByTypeQuery(type || "")

    if (!type || !ceilingTypesInfo[type]) {
        return <PageNotFound/>
    }

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