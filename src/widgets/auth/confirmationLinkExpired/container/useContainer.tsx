import { useState } from 'react'

import { useAppSelector } from '@/app/store/hooks/useAppSelector'
import { useSignUpEmailResendingMutation } from '@/services/authService/authEndpoints'
import { FRONTEND_URL } from '@/shared/constants/frontendUrl'
import { useTranslation } from '@/shared/hooks/useTranslation'

export const useContainer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  const [signUpEmailResend, { isLoading }] = useSignUpEmailResendingMutation()
  const email = useAppSelector(state => state.authReducer.email)

  const isDisabled = isLoading

  const handleCloseModal = (isOpen: boolean) => {
    setIsOpen(isOpen)
  }

  const onResendLink = () => {
    signUpEmailResend({
      baseUrl: FRONTEND_URL,
      email,
    })
      .unwrap()
      .then(() => {
        setIsOpen(true)
      })
      .catch(err => {
        console.error(err)
      })
  }

  return {
    email,
    handleCloseModal,
    isDisabled,
    isLoading,
    isOpen,
    onResendLink,
    setIsOpen,
    t,
  }
}
