import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useAppSelector } from '@/app/store/hooks/useAppSelector'
import { usePasswordRecoveryMutation } from '@/services/authService/authEndpoints'
import { authActions } from '@/services/authService/store/slice/authEndpoints.slice'
import { ROUTES } from '@/shared/constants/routes'
import {
  ForgotPasswordForm,
  forgotPasswordFormSchema,
} from '@/widgets/auth/forgotPassword/container/useContainer'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'

export const useContainer = () => {
  const token = useAppSelector(state => state.authReducer.recaptchaToken)
  const email = useAppSelector(state => state.authReducer.email)

  const router = useRouter()

  const { control, handleSubmit } = useForm<ForgotPasswordForm>({
    defaultValues: {
      email: email,
    },
    resolver: zodResolver(forgotPasswordFormSchema),
  })

  const [passwordRecovery, { isLoading: isLoadingPasswordRecovery }] = usePasswordRecoveryMutation()

  const onSubmit = handleSubmit(data => {
    if (typeof token === 'string') {
      const { email } = data

      passwordRecovery({
        baseUrl: 'http://localhost:3000',
        email,
        recaptcha: token,
      })
        .unwrap()
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err.data.messages)
          // setError(err.data.messages[0].field, {
          //   message: err?.data?.messages[0].message,
          // })
        })
    }
  })

  useEffect(() => {
    if (!token) {
      router.push(ROUTES.FORGOT_PASS)
    }
  }, [token, router.push])

  return {
    control,
    onSubmit,
    token,
  }
}
