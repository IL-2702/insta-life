import React from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Typography } from '@/shared/ui/Typography'
import { ControlledTextField } from '@/shared/ui/controlledInsta/ControlledTextField/ControlledTextField'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './CreateNewPassword.module.scss'

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

export const CreateNewPassword = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FormType>({
    defaultValues: {
      password: '',
      passwordConfirmation: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(schema),
  })
  const handleFormSubmit = handleSubmit(data => onSubmit({ password: data.password }))

  return (
    <>
      <Card className={s.card}>
        <Typography as={'h1'} className={s.title} variant={'h1'}>
          Create New Password
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <ControlledTextField
            className={s.password}
            control={control}
            label={'New password'}
            name={'password'}
            type={'password'}
          />
          <ControlledTextField
            className={s.confirmPassword}
            control={control}
            label={'Password confirmation'}
            name={'passwordConfirmation'}
            type={'password'}
          />
          <Typography as={'p'} variant={'regular14'} />
          <Button className={s.submitButton} fullWidth type={'submit'}>
            Create new password
          </Button>
        </form>
      </Card>
    </>
  )
}

type Props = {
  onSubmit: (data: Omit<FormType, 'passwordConfirmation'>) => void
}
