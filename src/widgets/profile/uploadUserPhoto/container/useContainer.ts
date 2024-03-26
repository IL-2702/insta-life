import { useState } from 'react'

import {
  useDeleteAvatarMutation,
  useGetProfileQuery,
} from '@/services/profileService/profileEndpoints'
import { useTranslation } from '@/shared/hooks/useTranslation'

export const useContainer = () => {
  const [isUploadOpen, setIsUploadOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const { data: profile } = useGetProfileQuery()
  const [deleteAvatar, { isLoading: isLoadingDeleteAvatar }] = useDeleteAvatarMutation()
  const avatar = profile?.avatars[0]?.url
  const avaHeight = profile?.avatars[0]?.height
  const avaWidth = profile?.avatars[0]?.width
  const { t } = useTranslation()
  const deleteAvatarHandler = () =>
    deleteAvatar()
      .unwrap()
      .then(() => setIsDeleteOpen(false))

  return {
    avaHeight,
    avaWidth,
    avatar,
    deleteAvatarHandler,
    isDeleteOpen,
    isLoadingDeleteAvatar,
    isUploadOpen,
    setIsDeleteOpen,
    setIsUploadOpen,
    t,
  }
}
