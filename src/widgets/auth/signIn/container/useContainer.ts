import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useAppSelector } from '@/app/store/hooks/useAppSelector'
import { useSignInMutation } from '@/services/authService/authEndpoints'
import { ROUTES } from '@/shared/constants/routes'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
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
  } = useForm<signInFormSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(signInSchema),
  })
  const router = useRouter()

  const token = useAppSelector(state => state.authReducer?.accessToken)

  const errorsWrapper = {
    errors,
  }

  // useEffect(() => {
  //   if (token) {
  //     router.push(ROUTES.PROFILE)
  //   }
  // }, [token, router])

  const [signIn, { isLoading: signIsLoading }] = useSignInMutation()

  const onSubmit = handleSubmit((data: signInFormSchema) => {
    signIn(data)
      .unwrap()
      .then(() => router.push(ROUTES.PROFILE))
      .catch(() => {
        setError('password', {
          message: 'The email or password are incorrect. Try again please',
          type: 'manual',
        })
      })
  })

  return { control, errorsWrapper, onSubmit, signIsLoading, token }
}
