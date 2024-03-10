import { useForm } from 'react-hook-form'

import { useSignInMutation } from '@/services/authService/authEndpoints'
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

  const errorsWrapper = {
    errors,
  }

  const router = useRouter()

  const [signIn] = useSignInMutation()

  const onSubmit = handleSubmit((data: signInFormSchema) => {
    signIn(data)
      .unwrap()
      .then(() => router.push('/profile'))
      .catch(() => {
        setError('password', {
          message: 'The email or password are incorrect. Try again please',
          type: 'manual',
        })
      })
  })

  return { control, errorsWrapper, onSubmit }
}
