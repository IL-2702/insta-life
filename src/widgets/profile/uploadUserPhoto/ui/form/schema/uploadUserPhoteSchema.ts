import { z } from 'zod'

export const uploadUserPhotoSchema = z.object({
  userPhoto: z
    .instanceof(File)
    .refine(file => file.size <= 1000000, `Max image size is 1MB.`)
    .refine(
      file => ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type),
      'Only .jpg, .jpeg, .png  formats are supported.'
    )
    .optional(),
})

export type uploadUserPhotoFormSchema = z.infer<typeof uploadUserPhotoSchema>
