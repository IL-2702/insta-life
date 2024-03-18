import { useEffect } from 'react'

import { useAppDispatch } from '@/app/store/hooks/useAppDispatch'
import { useSignUpConfirmationMutation } from '@/services/authService/authEndpoints'
import { authActions } from '@/services/authService/store/slice/authEndpoints.slice'
import { ROUTES } from '@/shared/constants/routes'
import { useLoader } from '@/shared/hooks/useLoader'
import { RegistrationConfirmation } from '@/widgets/auth/registrationConfirmation'
import { useRouter } from 'next/router'

export const useContainer = () => {
  const { isReady, push, query } = useRouter()
  const email = query.email as string
  const [registrationConfirmation, { isLoading }] = useSignUpConfirmationMutation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isReady) {
      return
    }
    if (query.code) {
      registrationConfirmation({
        confirmationCode: query.code as string,
      })
        .unwrap()
        .then(res => {
          push({ pathname: ROUTES.CONGRATULATION })
        })
        .catch(err => {
          console.log(err)
          push({ pathname: ROUTES.VERIFICATION_LINK_EXPIRED, query: { email: query.email } })
          if (email) {
            dispatch(authActions.setEmail(email))
          }
        })
    }
  }, [registrationConfirmation, dispatch, email, isReady, push, query.code, query.email])

  useLoader(isLoading)

  return {}
}
