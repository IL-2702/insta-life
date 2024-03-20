import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useAppSelector } from '@/app/store/hooks/useAppSelector'
import { useGetMeQuery, useSignInMutation } from '@/services/authService/authEndpoints'
import { ROUTES } from '@/shared/constants/routes'
import useSafePush from '@/shared/hooks/useSafePush'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { zodResolver } from '@hookform/resolvers/zod'
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
  const { data: me } = useGetMeQuery()
  const errorPassword = errors.password?.message
  const errorEmail = errors.email?.message

  const email = watch('email')
  const password = watch('password')
  const isDisabled = !email || !password || !!errorPassword || !!errorEmail || signIsLoading

  const { t } = useTranslation()
  const { safePush } = useSafePush()

  if (me) {
    safePush(ROUTES.LOGIN)
  }

  const onSubmit = handleSubmit((data: signInFormSchema) => {
    signIn(data)
      .unwrap()
      .then(() => {
        safePush(ROUTES.LOGIN)
      })
      .catch(e => {
        setError('password', {
          message: 'invalidEmailOrPass',
          type: 'manual',
        })
      })
  })

  return { control, errorEmail, errorPassword, isDisabled, me, onSubmit, signIsLoading, t }
}
