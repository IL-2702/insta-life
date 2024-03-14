import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { z } from 'zod'

export const forgotPasswordFormSchema = z.object({
  email: z.string().trim().email("User with this email doesn't exist").toLowerCase(),
})
export type ForgotPasswordForm = z.infer<typeof forgotPasswordFormSchema>
export const useContainer = () => {
  const { control, handleSubmit } = useForm<ForgotPasswordForm>({
    mode: 'onTouched',
    resolver: zodResolver(forgotPasswordFormSchema),
  })
  const onSubmit = handleSubmit(async data => {})
  const status = 'fulfilled'
  const { pathname, push } = useRouter()
  const isLoading = false

  const [, setEmail] = useState('')

  // useEffect(() => {
  //   status === 'fulfilled' && push(pathname + '/link-has-been-sent')
  // }, [status])

  return {
    control,
    isLoading,
    onSubmit,
  }
}
