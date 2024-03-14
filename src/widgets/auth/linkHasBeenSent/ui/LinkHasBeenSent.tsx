import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card/Card'
import { Spinner } from '@/shared/ui/Spinner'
import { Typography } from '@/shared/ui/Typography'
import { ControlledTextField } from '@/shared/ui/controlledInsta/ControlledTextField/ControlledTextField'
import { LinkHasBeenSentProps } from '@/widgets/auth/linkHasBeenSent/container'
import Link from 'next/link'

import s from './LinkHasBeenSent.module.scss'

export const LinkHasBeenSent = ({ control, onSubmit, token }: LinkHasBeenSentProps) => {
  if (!token) {
    return (
      <div className={s.spinner}>
        <Spinner />
      </div>
    )
  }

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
