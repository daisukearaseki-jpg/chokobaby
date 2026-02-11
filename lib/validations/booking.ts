import { z } from "zod"

export const bookingSchema = z.object({
  name: z
    .string()
    .min(1, "お名前を入力してください")
    .max(100, "お名前は100文字以内で入力してください"),
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .email("正しいメールアドレスを入力してください"),
  phone: z
    .string()
    .min(1, "電話番号を入力してください")
    .regex(/^[0-9\-]+$/, "電話番号は半角数字とハイフンのみで入力してください")
    .min(10, "電話番号を正しく入力してください")
    .max(15, "電話番号は15桁以内で入力してください"),
})

export type BookingFormData = z.infer<typeof bookingSchema>
