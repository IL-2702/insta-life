import { z } from 'zod'

export const uploadUserPhotoSchema = z.object({
  userPhoto: z
    .instanceof(File)
    .refine(file => file.size <= 1000000, `Max image size is 1MB.`)
    .refine(
      file => ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type),
      'Only .jpg, .jpeg, .png  formats are supported.'
    )
    .refine(async file => {
      const image = new Image()

      image.src = URL.createObjectURL(file)
      await new Promise(resolve => {
        image.onload = resolve
      })

      return image.width >= 300 && image.height >= 300 // Проверяем, что ширина не больше 800px и высота не больше 600px
    }, 'Image should be no larger than 800x600.')
    .optional(),
})

export type uploadUserPhotoFormSchema = z.infer<typeof uploadUserPhotoSchema>
