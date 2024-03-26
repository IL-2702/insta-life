import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useUploadAvatarMutation } from '@/services/profileService/profileEndpoints'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const uploadUserPhotoSchema = z.object({
  userPhoto: z
    .instanceof(File)
    .refine(file => file.size <= 10000000, `Max image size is 10MB.`)
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

      return image.width >= 332 && image.height >= 332 // Проверяем, что ширина не больше 800px и высота не больше 600px
    }, 'Image should be larger than 332x332.')
    .optional(),
})

export type uploadUserPhotoFormSchema = z.infer<typeof uploadUserPhotoSchema>

export const useUploadUserPhotoForm = (currUserPhoto?: string, onClose?: () => void) => {
  const [userPhoto, setUSerPhoto] = useState<string | undefined>(currUserPhoto)
  const [uploadAvatar, { isLoading: isLoadingUploadAvatar }] = useUploadAvatarMutation()
  const uploadAvatarHandler = (file: FormData) => {
    uploadAvatar({ file })
      .unwrap()
      .then(() => {
        resetField('userPhoto')
        onClose?.()
      })
  }
  const {
    control,
    formState: { errors },
    handleSubmit,
    resetField,
    trigger,
    watch,
  } = useForm<uploadUserPhotoFormSchema>({
    resolver: zodResolver(uploadUserPhotoSchema),
  })

  const userPhotoError = errors.userPhoto?.message
  const extraActionsUserPhoto = async () => {
    const success = await trigger('userPhoto')

    const file = watch('userPhoto')

    if (file) {
      const badCase = currUserPhoto || ''
      const img = success ? URL.createObjectURL(file) : badCase

      setUSerPhoto(img)
    }
  }

  return {
    control,
    extraActionsUserPhoto,
    handleSubmit,
    isLoadingUploadAvatar,
    uploadAvatarHandler,
    userPhoto,
    userPhotoError,
  }
}
