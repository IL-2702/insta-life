import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { useAppDispatch } from '@/app/store/hooks/useAppDispatch'
import { useAppSelector } from '@/app/store/hooks/useAppSelector'
import { useSignInMutation } from '@/services/authService/authEndpoints'
import { authActions } from '@/services/authService/store/slice/authEndpoints.slice'
import { ROUTES } from '@/shared/constants/routes'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().email('invalidEmailAddress'),
  password: z.string().min(6, 'passwordMin').max(20, 'passwordMax'),
})

export type signInFormSchema = z.infer<typeof signInSchema>

export const useContainer = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
    watch,
  } = useForm<signInFormSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(signInSchema),
  })
  const [signIn, { isLoading: signIsLoading }] = useSignInMutation()
  const errorPassword = errors.password?.message
  const errorEmail = errors.email?.message

  const email = watch('email')
  const password = watch('password')
  const isDisabled = !email || !password || !!errorPassword || !!errorEmail || signIsLoading

  const dispatch = useAppDispatch()

  const token = useAppSelector(state => state.authReducer.accessToken)

  const { t } = useTranslation()
  const { push } = useRouter()
  const onSubmit = handleSubmit((data: signInFormSchema) => {
    signIn(data)
      .unwrap()
      .catch(e => {
        setError('password', {
          message: 'invalidEmailOrPass',
          type: 'manual',
        })
      })

    dispatch(authActions.setEmail(email))
  })

  const login = () => {
    const GOOGLE_CLIENT_ID =
      '617342613759-f3kbvgm8l310fn40vh6qna2pv8u2uccr.apps.googleusercontent.com'
    const REDIRECT_URL = 'http://localhost:3000/google'
    const scope = 'email profile'

    return `https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&response_type=code&redirect_uri=${REDIRECT_URL}&client_id=${GOOGLE_CLIENT_ID}`

    //   window.location.assign(url)
  }

  useEffect(() => {
    if (token) {
      push(ROUTES.PROFILE)
    }
  }, [token])

  return {
    control,
    errorEmail,
    errorPassword,
    isDisabled,
    login,
    onSubmit,
    signIsLoading,
    t,
    token,
  }
}
