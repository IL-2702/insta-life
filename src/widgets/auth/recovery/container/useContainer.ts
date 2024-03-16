import { useEffect } from 'react'

import { useAppDispatch } from '@/app/store/hooks/useAppDispatch'
import { useCheckRecoveryCodeMutation } from '@/services/authService/authEndpoints'
import { authActions } from '@/services/authService/store/slice/authEndpoints.slice'
import { ROUTES } from '@/shared/constants/routes'
import { useRouter } from 'next/router'

export const useContainer = () => {
  const { push, query } = useRouter()
  const email = query.email as string

  const [checkRecoveryCode] = useCheckRecoveryCodeMutation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (query.code) {
      checkRecoveryCode({
        recoveryCode: query.code as string,
      })
        .unwrap()
        .then(res => {
          console.log(res)
          push(ROUTES.CREATE_NEW_PASSWORD)
        })
        .catch(err => {
          console.log(err)
          push(ROUTES.VERIFICATION_LINK_EXPIRED, { query: { email: query.email } })
          if (email) {
            dispatch(authActions.setEmail(email))
          }
        })
    }
  }, [query.code])

  return {}
}
