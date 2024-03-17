import { useEffect } from 'react'

import { useAppDispatch } from '@/app/store/hooks/useAppDispatch'
import { useCheckRecoveryCodeMutation } from '@/services/authService/authEndpoints'
import { authActions } from '@/services/authService/store/slice/authEndpoints.slice'
import { ROUTES } from '@/shared/constants/routes'
import { useRouter } from 'next/router'

export const useContainer = () => {
  const { isReady, push, query } = useRouter()
  const email = query.email as string

  const [checkRecoveryCode] = useCheckRecoveryCodeMutation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isReady) {
      return
    }
    if (query.code) {
      checkRecoveryCode({
        recoveryCode: query.code as string,
      })
        .unwrap()
        .then(_ => {
          push({ pathname: ROUTES.CREATE_NEW_PASSWORD, query: { code: query.code } })
        })
        .catch(_ => {
          push({ pathname: ROUTES.VERIFICATION_LINK_EXPIRED, query: { email: query.email } })
          if (email) {
            dispatch(authActions.setEmail(email))
          }
        })
    }
  }, [checkRecoveryCode, dispatch, email, isReady, push, query.code, query.email])

  return {}
}
