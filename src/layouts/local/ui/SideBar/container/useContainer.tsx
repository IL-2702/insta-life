import { useState } from 'react'

import { useAppSelector } from '@/app/store/hooks/useAppSelector'
import { useLogOutMutation } from '@/services/authService/authEndpoints'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { useRouter } from 'next/router'

export const useContainer = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const email = useAppSelector(state => state.authReducer.email)

  const { t } = useTranslation()
  const { pathname } = router

  const [logOut, { isLoading }] = useLogOutMutation()

  const handleLogOut = async () => {
    try {
      const res = await logOut().unwrap()

      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  return { email, handleLogOut, isLoading, isOpen, pathname, setIsOpen, t }
}
