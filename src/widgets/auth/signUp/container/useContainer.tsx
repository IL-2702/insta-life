import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { z } from 'zod'

const userNameRegExp = RegExp(/^[0-9A-Za-z]+$/)
const passwordRegExp = RegExp(/^[0-9A-Za-z!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~]+$/)

const signUpSchema = z
  .object({
    email: z.string().trim().email('The email must match the format example@example.com'),
    password: z
      .string()
      .trim()
      .regex(
        passwordRegExp,
        'Password must contain a-z, A-Z, 0-9, ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _` { | } ~'
      )
      .min(6, 'Minimum number of characters 6')
      .max(20),
    passwordConfirmation: z.string().regex(passwordRegExp).trim().min(6).max(20),
    termsAgreement: z.boolean(),
    userName: z
      .string()
      .regex(userNameRegExp, 'UserName must contain a-z, A-Z, 0-9')
      .trim()
      .min(6, 'Minimum number of characters 6')
      .max(30, 'Maximum number of characters 30'),
  })
  .refine(data => data.password === data.passwordConfirmation, {
    message: 'Passwords must match',
    path: ['passwordConfirmation'],
  })

export type SignUpFormSchema = z.infer<typeof signUpSchema>

export const useContainer = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<SignUpFormSchema>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
      termsAgreement: false,
      userName: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(signUpSchema),
  })

  const userNameErrorMessage = errors.userName?.message
  const emailErrorMessage = errors.email?.message
  const passwordErrorMessage = errors.password?.message
  const passwordConfirmationErrorMessage = errors.passwordConfirmation?.message

  const router = useRouter()

  const onSubmit = handleSubmit((data: SignUpFormSchema) => {})

  return {
    control,
    emailErrorMessage,
    onSubmit,
    passwordConfirmationErrorMessage,
    passwordErrorMessage,
    userNameErrorMessage,
  }
}
