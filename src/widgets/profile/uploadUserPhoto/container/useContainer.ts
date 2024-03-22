import { useState } from 'react'

import { useTranslation } from '@/shared/hooks/useTranslation'

export const useContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { t } = useTranslation()

  return { isModalOpen, setIsModalOpen, t }
}
