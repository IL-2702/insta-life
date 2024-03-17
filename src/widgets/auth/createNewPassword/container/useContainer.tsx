import { useForm } from 'react-hook-form'

import { useCreateNewPasswordMutation } from '@/services/authService/authEndpoints'
import { ROUTES } from '@/shared/constants/routes'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { z } from 'zod'

export const useContainer = () => {
  const passwordRegExp = RegExp(/^[0-9A-Za-z!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~]+$/)
  const schema = z
    .object({
      password: z
        .string()
        .trim()
        .min(6, 'passwordMin')
        .max(20, 'passwordMax')
        .regex(passwordRegExp, 'passwordRegex'),
      passwordConfirmation: z.string().trim().min(6, 'passwordMin').max(20, 'passwordMax'),
    })
    .refine(data => data.password === data.passwordConfirmation, {
      message: 'passwordsDontMatch',
      path: ['passwordConfirmation'],
    })

  type FormType = z.infer<typeof schema>

  const [createNewPassword] = useCreateNewPasswordMutation()
  const router = useRouter()
  const { code } = router.query

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

  const handleFormSubmit = handleSubmit(async data => {
    if (code && !Array.isArray(code)) {
      try {
        await createNewPassword({ newPassword: data.password, recoveryCode: code })
        await router.push(ROUTES.LOGIN)
      } catch (e) {
        console.log(e)
      }
    }
  })

  return { control, errorPassword, errorPasswordConfirmation, handleFormSubmit, t }
}
