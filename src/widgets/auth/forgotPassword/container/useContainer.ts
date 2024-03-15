import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useAppDispatch } from '@/app/store/hooks/useAppDispatch'
import { useAppSelector } from '@/app/store/hooks/useAppSelector'
import { usePasswordRecoveryMutation } from '@/services/authService/authEndpoints'
import { authActions } from '@/services/authService/store/slice/authEndpoints.slice'
import { ROUTES } from '@/shared/constants/routes'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { z } from 'zod'

export const forgotPasswordFormSchema = z.object({
  email: z.string().trim().email("User with this email doesn't exist").toLowerCase(),
})
export type ForgotPasswordForm = z.infer<typeof forgotPasswordFormSchema>
export const useContainer = () => {
  const publicKey = process.env.NEXT_PUBLIC_RECAPTCHA_API_KEY

  const { push } = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  const token = useAppSelector(state => state.authReducer.recaptchaToken)

  const dispatch = useAppDispatch()

  const handleSetToken = (token: string) => {
    dispatch(authActions.setRecaptchaToken(token))
  }

  const [passwordRecovery, { isLoading: isLoadingPasswordRecovery }] = usePasswordRecoveryMutation()

  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    setError,
  } = useForm<ForgotPasswordForm>({
    defaultValues: {
      email: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(forgotPasswordFormSchema),
  })

  const { email } = getValues()

  const emailError = errors.email?.message

  const isDisabled = !token || isLoadingPasswordRecovery || !email

  const onSubmit = handleSubmit(async data => {
    if (typeof token === 'string') {
      const { email } = data

      passwordRecovery({
        baseUrl: 'http://localhost:3000',
        email,
        recaptcha: token,
      })
        .unwrap()
        .then(res => {
          setIsOpen(true)
          dispatch(authActions.setEmail(email))
          console.log(res)
        })
        .catch(err => {
          console.log(err.data.messages)
          setError(err.data.messages[0].field, {
            message: err?.data?.messages[0].message,
          })
        })
    }
  })

  const redirectToForgotPassword = () => {
    push(ROUTES.LINK_NAS_BEEN_SENT)
  }

  return {
    control,
    email,
    emailError,
    handleSetToken,
    isDisabled,
    isLoadingPasswordRecovery,
    isOpen,
    onSubmit,
    publicKey,
    redirectToForgotPassword,
    setIsOpen,
  }
}
