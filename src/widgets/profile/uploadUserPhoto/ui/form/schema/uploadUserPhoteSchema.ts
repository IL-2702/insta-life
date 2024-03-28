import { z } from 'zod'

export const uploadUserPhotoSchema = z.object({
  userPhoto: z
    .custom<File>(v => v instanceof File)
    .refine(file => file.size <= 10000000, `imgLess10mb`)
    .refine(file => ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type), 'imgFormat')
    .refine(async file => {
      const image = new Image()

      image.src = URL.createObjectURL(file)
      await new Promise(resolve => {
        image.onload = resolve
      })

      return image.width >= 332 && image.height >= 332 // Проверяем, что ширина не больше 800px и высота не больше 600px
    }, 'imgLarger332')
    .optional(),
})

export type uploadUserPhotoFormSchema = z.infer<typeof uploadUserPhotoSchema>
