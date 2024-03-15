import React from 'react'

import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Typography } from '@/shared/ui/Typography'
import { ControlledTextField } from '@/shared/ui/controlledInsta/ControlledTextField/ControlledTextField'
import { CreateNewPasswordProps } from '@/widgets/auth/createNewPassword/container'

import s from './CreateNewPassword.module.scss'

export const CreateNewPassword = ({ control, handleFormSubmit }: CreateNewPasswordProps) => {
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

// type Props = {
//   onSubmit: (data: Omit<FormType, 'passwordConfirmation'>) => void
// }
