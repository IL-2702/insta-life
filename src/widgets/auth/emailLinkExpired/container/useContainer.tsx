import { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import { useAppDispatch } from '@/app/store/hooks/useAppDispatch'
import { useAppSelector } from '@/app/store/hooks/useAppSelector'
import { usePasswordRecoveryMutation } from '@/services/authService/authEndpoints'
import { authActions } from '@/services/authService/store/slice/authEndpoints.slice'
import { useRouter } from 'next/router'

export const useContainer = () => {
  const { query } = useRouter()

  const [passwordRecovery, { isLoading }] = usePasswordRecoveryMutation()
  const captchaRef = useRef<ReCAPTCHA | null>(null)

  const dispatch = useAppDispatch()

  const publicKey = process.env.NEXT_PUBLIC_RECAPTCHA_API_KEY

  const token = useAppSelector(state => state.authReducer.recaptchaToken)

  const handleSetToken = (token: null | string) => {
    if (token) {
      dispatch(authActions.setRecaptchaToken(token))
    }
  }

  const onRecentLink = () => {
    if (query.email && token) {
      passwordRecovery({
        baseUrl: 'http://localhost:3000',
        email: query.email as string,
        recaptcha: token,
      })
        .unwrap()
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.error(err)
        })
        .finally(() => {
          if (captchaRef.current) {
            dispatch(authActions.setRecaptchaToken(''))
            captchaRef.current.reset()
          }
        })
    }
  }

  return { captchaRef, handleSetToken, isLoading, onRecentLink, publicKey }
}
