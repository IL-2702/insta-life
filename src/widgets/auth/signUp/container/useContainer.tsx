import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useSignUpMutation } from '@/services/authService/authEndpoints'
import { FRONTEND_URL } from '@/shared/constants/frontendUrl'
import { useTranslation } from '@/shared/hooks/useTranslation'
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
  const [isOpen, setIsOpen] = useState(false)

  const {
    control,
    formState: { dirtyFields, errors, isDirty },
    getValues,
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

  const { email } = getValues()

  const userNameErrorMessage = errors.userName?.message
  const emailErrorMessage = errors.email?.message
  const passwordErrorMessage = errors.password?.message
  const passwordConfirmationErrorMessage = errors.passwordConfirmation?.message

  const fieldNames = Object.keys(signUpSchema)
  const isFormValid = Object.keys(errors).length === 0 && isDirty && dirtyFields.termsAgreement

  const router = useRouter()
  const { t } = useTranslation()

  const [signUp] = useSignUpMutation()

  const onSubmit = handleSubmit((data: SignUpFormSchema) => {
    const { email, password, userName } = data

    signUp({ baseUrl: FRONTEND_URL, email, password, userName })
      .unwrap()
      .then(() => setIsOpen(true))
      .catch(err => {
        setError(err.data.messages[0].field, {
          message: err?.data?.messages[0].message,
        })
      })
  })

  const handleCloseModal = (isOpen: boolean) => {
    setIsOpen(isOpen)
  }

  const pointerOutsideClickHandler = () => setIsOpen(false)

  return {
    control,
    email,
    emailErrorMessage,
    handleCloseModal,
    isFormValid,
    isOpen,
    onSubmit,
    passwordConfirmationErrorMessage,
    passwordErrorMessage,
    pointerOutsideClickHandler,
    t,
    userNameErrorMessage,
  }
}
