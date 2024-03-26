import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useUploadAvatarMutation } from '@/services/profileService/profileEndpoints'
import {
  uploadUserPhotoFormSchema,
  uploadUserPhotoSchema,
} from '@/widgets/profile/uploadUserPhoto/ui/form/schema/uploadUserPhoteSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export const useUploadUserPhotoForm = (currUserPhoto?: string, onClose?: () => void) => {
  const [userPhoto, setUSerPhoto] = useState<string | undefined>(currUserPhoto)
  const [uploadAvatar, { isLoading: isLoadingUploadAvatar }] = useUploadAvatarMutation()
  const uploadAvatarHandler = (file: FormData) => {
    uploadAvatar({ file })
      .unwrap()
      .then(() => {
        // resetField('userPhoto')
        onClose?.()
      })
  }
  // const {
  //   control,
  //   formState: { errors },
  //   handleSubmit,
  //   resetField,
  //   trigger,
  //   watch,
  // } = useForm<uploadUserPhotoFormSchema>({
  //   resolver: zodResolver(uploadUserPhotoSchema),
  // })

  // const userPhotoError = errors.userPhoto?.message
  // const extraActionsUserPhoto = async () => {
  //   const success = await trigger('userPhoto')
  //
  //   const file = watch('userPhoto')
  //
  //   if (file) {
  //     const badCase = currUserPhoto || ''
  //     const img = success ? URL.createObjectURL(file) : badCase
  //
  //     setUSerPhoto(img)
  //   }
  // }

  return {
    // control,
    // extraActionsUserPhoto,
    // handleSubmit,
    isLoadingUploadAvatar,
    uploadAvatarHandler,
    userPhoto,
    // userPhotoError,
  }
}
