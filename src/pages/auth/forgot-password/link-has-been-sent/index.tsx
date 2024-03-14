import { useForm } from 'react-hook-form'

import { getBaseLayout } from '@/layouts/publ/BaseLayout/BaseLayout'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card/Card'
import { Typography } from '@/shared/ui/Typography'
import { ControlledTextField } from '@/shared/ui/controlledInsta/ControlledTextField/ControlledTextField'
import {
  ForgotPasswordForm,
  forgotPasswordFormSchema,
} from '@/widgets/auth/forgotPassword/container/useContainer'
import { zodResolver } from '@hookform/resolvers/zod'
import { GetStaticPropsContext } from 'next'
import Link from 'next/link'

import s from './LinkHasBeenSent.module.scss'

const LinkHasBeenSent = () => {
  const { control, handleSubmit } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordFormSchema),
  })
  const onSubmit = handleSubmit(async data => {})

  return (
    <div className={s.container}>
      <Card className={s.card}>
        <Typography variant={'h1'}>Forgot Password</Typography>
        <form onSubmit={onSubmit}>
          <ControlledTextField
            className={s.email}
            control={control}
            label={'email'}
            name={'email'}
          />
          <Typography className={s.subtitle} variant={'regular14'}>
            Enter your email address and we will send you further instructions
          </Typography>
          <Typography className={s.description} variant={'regular14'}>
            The link has been sent by email. If you don’t receive an email send link again
          </Typography>
          <Button className={s.registerBtn} fullWidth type={'submit'}>
            <Typography variant={'h3'}>Send Link Again</Typography>
          </Button>
        </form>
        <Link className={s.link} href={'/auth/sign-in'}>
          <Typography variant={'h3'}>Back to Sign In</Typography>
        </Link>
      </Card>
    </div>
  )
}

LinkHasBeenSent.getLayout = getBaseLayout
export default LinkHasBeenSent
