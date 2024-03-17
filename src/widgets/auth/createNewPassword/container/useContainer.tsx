import { useForm } from 'react-hook-form'

import { useTranslation } from '@/shared/hooks/useTranslation'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const useContainer = () => {
  const schema = z
    .object({
      password: z.string().trim().min(6, 'passwordMin').max(20, 'passwordMax'),
      passwordConfirmation: z.string().trim().min(6, 'passwordMin').max(20, 'passwordMax'),
    })
    .refine(data => data.password === data.passwordConfirmation, {
      message: 'passwordsDontMatch',
      path: ['passwordConfirmation'],
    })

  type FormType = z.infer<typeof schema>

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormType>({
    defaultValues: {
      password: '',
      passwordConfirmation: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(schema),
  })
  const errorPassword = errors.password?.message
  const errorPasswordConfirmation = errors.passwordConfirmation?.message

  const { t } = useTranslation()
  const handleFormSubmit = handleSubmit(data => {
    console.log(data)
  })

  return { control, errorPassword, errorPasswordConfirmation, handleFormSubmit, t }
}
