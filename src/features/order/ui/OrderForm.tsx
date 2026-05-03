import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { orderSchema, OrderFormData } from "../model/order.schema"
import { TextField, Button, Box, Typography } from "@mui/material"

export const OrderForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<OrderFormData>({
        resolver: zodResolver(orderSchema),
    })

    const onSubmit = (data: OrderFormData) => {
        console.log("FORM DATA:", data)

        // имитация запроса
        setTimeout(() => {
            alert("Заявка отправлена!")
            reset()
        }, 500)
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                maxWidth: 400,
                margin: "40px auto",
                display: "flex",
                flexDirection: "column",
                gap: 2,
            }}
        >
            <Typography variant="h5" textAlign="center">
                Оставить заявку
            </Typography>

            <TextField
                label="Ваше имя"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
            />

            <TextField
                label="Телефон"
                {...register("phone")}
                error={!!errors.phone}
                helperText={errors.phone?.message}
            />

            <TextField
                label="Комментарий"
                multiline
                rows={3}
                {...register("comment")}
            />

            <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
            >
                Отправить
            </Button>
        </Box>
    )
}