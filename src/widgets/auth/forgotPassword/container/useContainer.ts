import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { usePasswordRecoveryMutation } from '@/services/authService/authEndpoints'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { z } from 'zod'

export const forgotPasswordFormSchema = z.object({
  email: z.string().trim().email("User with this email doesn't exist").toLowerCase(),
})
export type ForgotPasswordForm = z.infer<typeof forgotPasswordFormSchema>
export const useContainer = () => {
  const publicKey = process.env.NEXT_PUBLIC_RECAPTCHA_API_KEY

  const [token, setToken] = useState<null | string>(null)
  const [isOpen, setIsOpen] = useState(false)

  const [passwordRecovery, { isLoading: isLoadingPasswordRecovery }] = usePasswordRecoveryMutation()

  const { control, getValues, handleSubmit } = useForm<ForgotPasswordForm>({
    defaultValues: {
      email: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(forgotPasswordFormSchema),
  })

  const { email } = getValues()

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
          console.log(res)
        })
        .catch(err => {
          console.error(err)
        })
    }
  })

  return {
    control,
    email,
    isDisabled,
    isLoadingPasswordRecovery,
    isOpen,
    onSubmit,
    publicKey,
    setIsOpen,
    setToken,
  }
}
