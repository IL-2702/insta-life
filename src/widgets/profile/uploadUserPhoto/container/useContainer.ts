import { useState } from 'react'

import { useGetProfileQuery } from '@/services/profileService/profileEndpoints'
import { useTranslation } from '@/shared/hooks/useTranslation'

export const useContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { data: profile } = useGetProfileQuery()

  const avatar = profile?.avatars[0]?.url
  const avaHeight = profile?.avatars[0]?.height
  const avaWidth = profile?.avatars[0]?.width
  const { t } = useTranslation()

  return { avaHeight, avaWidth, avatar, isModalOpen, setIsModalOpen, t }
}
