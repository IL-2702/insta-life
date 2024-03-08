import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { getBaseLayout } from '@/layouts/publ/BaseLayout/BaseLayout'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { GoBack } from '@/shared/ui/GoBack'
import { Typography } from '@/shared/ui/Typography'
import { ControlledTextField } from '@/shared/ui/controlledInsta/ControlledTextField/ControlledTextField'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { z } from 'zod'

import s from './ForgotPassword.module.scss'

export const forgotPasswordSchema = z.object({
  email: z.string().trim().email("User with this email doesn't exist").toLowerCase(),
})

export type ForgotPasswordFormType = z.infer<typeof forgotPasswordSchema>

const ForgotPassword = () => {
  const status = 'fulfilled'
  const { pathname, push } = useRouter()
  const isLoading = false

  const [, setEmail] = useState('')

  const { control, handleSubmit } = useForm<ForgotPasswordFormType>({
    mode: 'onTouched',
    resolver: zodResolver(forgotPasswordSchema),
  })
  const onSubmit = handleSubmit(async data => {})

  // useEffect(() => {
  //   status === 'fulfilled' && push(pathname + '/link-has-been-sent')
  // }, [status])

  return (
    <div className={s.container}>
      <Card className={s.card}>
        <Typography variant={'h1'}>Forgot Password</Typography>
        <form onSubmit={onSubmit}>
          <ControlledTextField
            className={s.email}
            control={control}
            label={'Email'}
            name={'email'}
          />
          <Typography className={s.subtitle} variant={'regular14'}>
            Enter your email address and we will send you further instructions
          </Typography>
          <Button
            className={s.registerBtn}
            disabled={isLoading}
            fullWidth
            isLoading={isLoading}
            type={'submit'}
          >
            <Typography variant={'h3'}>Send Link</Typography>
          </Button>
        </form>
        <Link className={s.link} href={'/auth/sign-in'}>
          <Typography variant={'h3'}>Back to Sign In</Typography>
        </Link>
      </Card>
    </div>
  )
}

ForgotPassword.getLayout = getBaseLayout
export default ForgotPassword
