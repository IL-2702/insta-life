import { useForm } from 'react-hook-form'

import { useCreateNewPasswordMutation } from '@/services/authService/authEndpoints'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { z } from 'zod'

export const useContainer = () => {
  const schema = z
    .object({
      password: z
        .string()
        .trim()
        .min(6, 'Password must be at least 5 characters')
        .max(20, 'The password must be no more than 20 characters'),
      passwordConfirmation: z
        .string()
        .trim()
        .min(6, 'Password must be at least 5 characters')
        .max(20, 'The password must be no more than 20 characters'),
    })
    .refine(data => data.password === data.passwordConfirmation, {
      message: "Passwords don't match",
      path: ['passwordConfirmation'],
    })

  type FormType = z.infer<typeof schema>

  const [createNewPassword] = useCreateNewPasswordMutation()
  const router = useRouter()
  const { code } = router.query

  const { control, handleSubmit } = useForm<FormType>({
    defaultValues: {
      password: '',
      passwordConfirmation: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(schema),
  })

  const { t } = useTranslation()

  const handleFormSubmit = handleSubmit(async data => {
    if (code && !Array.isArray(code)) {
      try {
        createNewPassword({ newPassword: data.password, recoveryCode: code })
      } catch (e) {
        console.log(e)
      }
    }
  })

  return { control, handleFormSubmit, t }
}
