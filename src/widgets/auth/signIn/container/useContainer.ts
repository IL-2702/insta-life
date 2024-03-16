import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useAppSelector } from '@/app/store/hooks/useAppSelector'
import { useSignInMutation } from '@/services/authService/authEndpoints'
import { ROUTES } from '@/shared/constants/routes'
import useSafePush from '@/shared/hooks/useSafePush'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(30),
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

  const errorsWrapper = {
    errors,
  }

  const email = watch('email')
  const password = watch('password')
  const isDisabled =
    !email ||
    !password ||
    !!errorsWrapper.errors.email ||
    !!errorsWrapper.errors.password ||
    signIsLoading

  const { safePush } = useSafePush()
  const { t } = useTranslation()

  const token = useAppSelector(state => state.authReducer?.accessToken)

  useEffect(() => {
    if (token) {
      safePush(ROUTES.PROFILE)
    }
  }, [token, safePush])

  const onSubmit = handleSubmit((data: signInFormSchema) => {
    signIn(data)
      .unwrap()
      .catch(e => {
        setError('password', {
          message: e?.data?.messages,
          type: 'manual',
        })
      })
  })

  return { control, errorsWrapper, isDisabled, onSubmit, signIsLoading, t, token }
}
