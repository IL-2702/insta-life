import { memo } from 'react'

import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Typography } from '@/shared/ui/Typography'
import { ControlledCheckbox } from '@/shared/ui/controlledInsta/ControlledCheckbox/ControlledCheckbox'
import { ControlledTextField } from '@/shared/ui/controlledInsta/ControlledTextField/ControlledTextField'
import { SignUpProps } from '@/widgets/auth/signUp/container'
import Image from 'next/image'
import Link from 'next/link'
import gitLogo from 'public/assets/githubLogo.svg'
import gLogo from 'public/assets/googleLogo.svg'

import s from './SignUp.module.scss'

const TERMS_OF_SERVICE = 'terms-of-service'
const PRIVACY_POLICY = 'privacy-policy'

export const SignUp = memo(
  ({
    control,
    emailErrorMessage,
    onSubmit,
    passwordConfirmationErrorMessage,
    passwordErrorMessage,
    userNameErrorMessage,
  }: SignUpProps) => {
    return (
      <Card className={s.card}>
        <Typography as={'h2'} className={s.title} variant={'h1'}>
          Sign Up
        </Typography>
        <div className={s.services}>
          <Link href={'#google#'}>
            <Image alt={'SignIn with google service'} height={36} src={gLogo} width={36} />
          </Link>
          <Link href={'#github#'}>
            <Image alt={'SignIn with github service'} height={36} src={gitLogo} width={36} />
          </Link>
        </div>
        <form className={s.form} onSubmit={onSubmit}>
          <ControlledTextField
            className={s.email}
            control={control}
            errorMessage={userNameErrorMessage}
            label={'Username'}
            name={'userName'}
          />
          <ControlledTextField
            className={s.email}
            control={control}
            errorMessage={emailErrorMessage}
            label={'Email'}
            name={'email'}
            type={'email'}
          />
          <ControlledTextField
            className={s.password}
            control={control}
            errorMessage={passwordErrorMessage}
            label={'Password'}
            name={'password'}
            type={'password'}
          />
          <ControlledTextField
            className={s.passwordConfirmation}
            control={control}
            errorMessage={passwordConfirmationErrorMessage}
            label={'Password confirmation'}
            name={'passwordConfirmation'}
            type={'password'}
          />
          <div className={s.checkAgreement}>
            <ControlledCheckbox control={control} name={'termsAgreement'} />
            <Typography color={'light'} variant={'link-small'}>
              I agree to the&nbsp;
              <Link href={TERMS_OF_SERVICE}>
                <Typography as={'span'} color={'primary'} variant={'link-small'}>
                  Terms of Service
                </Typography>
              </Link>
              &nbsp;and&nbsp;
              <Link href={PRIVACY_POLICY}>
                <Typography as={'span'} color={'primary'} variant={'link-small'}>
                  Privacy Policy
                </Typography>
              </Link>
            </Typography>
          </div>
          <Button className={s.submit} fullWidth type={'submit'}>
            Sign Up
          </Button>
          <div className={s.signInSuggestion}>
            <Typography variant={'regular16'}>Do you have an account?</Typography>
            <Link href={'sign-in'}>
              <Typography color={'primary'} variant={'h3'}>
                Sign In
              </Typography>
            </Link>
          </div>
        </form>
      </Card>
    )
  }
)
