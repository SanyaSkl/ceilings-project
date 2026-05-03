import { z } from "zod"

export const orderSchema = z.object({
    name: z.string().min(2, "Минимум 2 символа"),
    phone: z
        .string()
        .min(10, "Введите корректный номер")
        .regex(/^[0-9+() -]+$/, "Только цифры и символы +()-"),
    comment: z.string().optional(),
})

export type OrderFormData = z.infer<typeof orderSchema>