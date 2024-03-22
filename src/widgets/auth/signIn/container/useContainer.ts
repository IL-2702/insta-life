import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useAppDispatch } from '@/app/store/hooks/useAppDispatch'
import { useAppSelector } from '@/app/store/hooks/useAppSelector'
import { useOAuthGoogleMutation, useSignInMutation } from '@/services/authService/authEndpoints'
import { authActions } from '@/services/authService/store/slice/authEndpoints.slice'
import { ROUTES } from '@/shared/constants/routes'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useGoogleLogin } from '@react-oauth/google'
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
  const [oAuthGoogle, { isLoading: isLoadingGoogle }] = useOAuthGoogleMutation()

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

  const login = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: googleResponse => {
      const data = {
        code: googleResponse.code,
      }

      console.log(data)

      oAuthGoogle(data)
        .unwrap()
        .then(res => {
          push(ROUTES.PROFILE)
          dispatch(authActions.setAccessToken(res.accessToken!))
          dispatch(authActions.setEmail(res.email!))
        })
        .catch(err => {
          console.log(err)
          push(ROUTES.LOGIN)
        })
    },
  })

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
    isLoadingGoogle,
    login,
    onSubmit,
    signIsLoading,
    t,
    token,
  }
}
