import { useCallback, useEffect, useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

import { getBaseLayout } from '@/layouts/publ/BaseLayout/BaseLayout'
import { usePasswordRecoveryMutation } from '@/services/authService/authEndpoints'
import { ROUTES } from '@/shared/constants/routes'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { GoBack } from '@/shared/ui/GoBack'
import { Modal } from '@/shared/ui/Modal'
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
  // const { push, router } = useRouter()

  const publicKey = process.env.NEXT_PUBLIC_RECAPTCHA_API_KEY

  const [token, setToken] = useState<null | string>(null)
  const [isOpen, setIsOpen] = useState(false)

  const [passwordRecovery, { isLoading: isLoadingPasswordRecovery }] = usePasswordRecoveryMutation()

  const { control, getValues, handleSubmit } = useForm<ForgotPasswordFormType>({
    defaultValues: {
      email: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(forgotPasswordSchema),
  })

  const { email } = getValues()

  const isDisabled = !token || isLoadingPasswordRecovery || !email

  const onSubmit = handleSubmit(async data => {
    if (typeof token === 'string') {
      const { email } = data

      passwordRecovery({
        baseUrl: 'http://localhost:3000',
        email,
        recaptcha: token,
      })
        .unwrap()
        .then(res => {
          setIsOpen(true)
          console.log(res)
        })
        .catch(err => {
          console.error(err)
        })
    }
  })

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

ForgotPassword.getLayout = getBaseLayout
export default ForgotPassword
