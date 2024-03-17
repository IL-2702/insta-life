import { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import { useAppDispatch } from '@/app/store/hooks/useAppDispatch'
import { useAppSelector } from '@/app/store/hooks/useAppSelector'
import { usePasswordRecoveryMutation } from '@/services/authService/authEndpoints'
import { authActions } from '@/services/authService/store/slice/authEndpoints.slice'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { useRouter } from 'next/router'

export const useContainer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()
  const { locale } = useRouter()

  const [passwordRecovery, { isLoading }] = usePasswordRecoveryMutation()
  const captchaRef = useRef<ReCAPTCHA | null>(null)

  const dispatch = useAppDispatch()

  const publicKey = process.env.NEXT_PUBLIC_RECAPTCHA_API_KEY

  const token = useAppSelector(state => state.authReducer.recaptchaToken)
  const email = useAppSelector(state => state.authReducer.email)

  const isDisabled = !token || isLoading

  const handleSetToken = (token: null | string) => {
    if (token) {
      dispatch(authActions.setRecaptchaToken(token))
    }
  }

  const handleCloseModal = (isOpen: boolean) => {
    setIsOpen(isOpen)
  }

  const onRecentLink = () => {
    if (email && token) {
      passwordRecovery({
        baseUrl: 'http://localhost:3000',
        email: email as string,
        recaptcha: token,
      })
        .unwrap()
        .then(res => {
          console.log(res)
          setIsOpen(true)
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

  return {
    captchaRef,
    email,
    handleCloseModal,
    handleSetToken,
    isDisabled,
    isLoading,
    isOpen,
    locale,
    onRecentLink,
    publicKey,
    setIsOpen,
    t,
  }
}
