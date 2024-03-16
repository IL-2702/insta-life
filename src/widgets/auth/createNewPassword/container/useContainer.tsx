import { useForm } from 'react-hook-form'

import { useTranslation } from '@/shared/hooks/useTranslation'
import { zodResolver } from '@hookform/resolvers/zod'
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

  const { control, handleSubmit } = useForm<FormType>({
    defaultValues: {
      password: '',
      passwordConfirmation: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(schema),
  })

  const { t } = useTranslation()
  const handleFormSubmit = handleSubmit(data => {
    console.log(data)
  })

  return { control, handleFormSubmit, t }
}
