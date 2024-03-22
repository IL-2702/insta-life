import { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  uploadUserPhotoFormSchema,
  uploadUserPhotoSchema,
} from '@/widgets/profile/uploadUserPhoto/ui/form/schema/uploadUserPhoteSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export const useUploadUserPhotoForm = (currUserPhoto?: string) => {
  const [userPhoto, setUSerPhoto] = useState<string | undefined>(currUserPhoto)

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

  return { control, extraActionsUserPhoto, handleSubmit, userPhoto, userPhotoError }
}
