import { useAppDispatch } from '@/app/store/hooks/useAppDispatch'
import { useLogOutMutation } from '@/services/authService/authEndpoints'
import { authActions } from '@/services/authService/store/slice/authEndpoints.slice'
import { ROUTES } from '@/shared/constants/routes'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { useRouter } from 'next/router'

export const useContainer = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const { pathname, push } = router

  const [logOut] = useLogOutMutation()

  const dispatch = useAppDispatch()

  const handleLogOut = async () => {
    try {
      const res = await logOut().unwrap()

      dispatch(authActions.setAccessToken(''))
      await push(ROUTES.LOGIN)

      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  return { handleLogOut, pathname, t }
}
