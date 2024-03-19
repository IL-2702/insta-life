import { useEffect } from 'react'

import { useAppSelector } from '@/app/store/hooks/useAppSelector'
import { useLogOutMutation } from '@/services/authService/authEndpoints'
import { ROUTES } from '@/shared/constants/routes'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { useRouter } from 'next/router'

export const useContainer = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const { pathname, push } = router

  const [logOut] = useLogOutMutation()

  const handleLogOut = async () => {
    try {
      const res = await logOut().unwrap()

      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  return { handleLogOut, pathname, t }
}
