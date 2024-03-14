import ReCAPTCHA from 'react-google-recaptcha'

import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Modal } from '@/shared/ui/Modal'
import { Typography } from '@/shared/ui/Typography'
import { ControlledTextField } from '@/shared/ui/controlledInsta/ControlledTextField/ControlledTextField'
import { ForgotPasswordProps } from '@/widgets/auth/forgotPassword/container'
import Link from 'next/link'

import s from './ForgotPassword.module.scss'

export const ForgotPassword = ({
  control,
  email,
  isDisabled,
  isLoadingPasswordRecovery,
  isOpen,
  onSubmit,
  publicKey,
  setIsOpen,
  setToken,
}: ForgotPasswordProps) => {
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
            disabled={isDisabled}
            fullWidth
            isLoading={isLoadingPasswordRecovery}
            type={'submit'}
          >
            <Typography variant={'h3'}>{!isLoadingPasswordRecovery && 'Send Link'}</Typography>
          </Button>
        </form>
        <Link className={s.link} href={'/auth/sign-in'}>
          <Typography variant={'h3'}>Back to Sign In</Typography>
        </Link>
        <div className={s.recaptchaWrapper}>
          <ReCAPTCHA onChange={token => setToken(token)} sitekey={publicKey!} theme={'dark'} />
        </div>
      </Card>
      <Modal
        modalHandler={isOpen => setIsOpen(isOpen)}
        onPointerOutsideClickHandler={() => setIsOpen(false)}
        open={isOpen}
        title={'Email sent'}
      >
        <Typography
          variant={'regular16'}
        >{`We have sent a link to confirm your email to ${email}`}</Typography>
      </Modal>
    </div>
  )
}
