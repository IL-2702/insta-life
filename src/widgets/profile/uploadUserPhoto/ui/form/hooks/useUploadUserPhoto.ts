import { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  uploadUserPhotoFormSchema,
  uploadUserPhotoSchema,
} from '@/widgets/profile/uploadUserPhoto/ui/form/schema/uploadUserPhoteSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export const useUploadUserPhoto = (currUserPhoto?: string) => {
  const [userPhoto, setUSerPhoto] = useState<string | undefined>(currUserPhoto)
  const [userPhotoError, setUserPhotoError] = useState<string | undefined>(undefined)

  const { control, getFieldState, handleSubmit, resetField, trigger, watch } =
    useForm<uploadUserPhotoFormSchema>({
      resolver: zodResolver(uploadUserPhotoSchema),
    })

  const extraActionsUserPhoto = async () => {
    const success = await trigger('userPhoto')

    const { error } = getFieldState('userPhoto')

    const file = watch('userPhoto')

    if (!success && error?.message) {
      setUserPhotoError(error.message)
      resetField('userPhoto')
    }

    if (file) {
      const badCase = currUserPhoto || ''
      const img = success ? URL.createObjectURL(file) : badCase

      setUSerPhoto(img)
      if (userPhotoError) {
        setUserPhotoError(undefined)
      }
    }
  }

  return { control, extraActionsUserPhoto, handleSubmit, userPhoto, userPhotoError }
}
