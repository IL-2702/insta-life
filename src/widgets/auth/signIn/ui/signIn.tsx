import { memo } from 'react'

import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Typography } from '@/shared/ui/Typography'
import { ControlledTextField } from '@/shared/ui/controlledInsta/ControlledTextField/ControlledTextField'
import { SignInProps } from '@/widgets/auth/signIn/container'
import Image from 'next/image'
import Link from 'next/link'

import s from './signIn.module.scss'

import gitLogo from '../../../../../public/assets/githubLogo.svg'
import gLogo from '../../../../../public/assets/googleLogo.svg'

export const SignIn = memo(({ control, errorsWrapper, onSubmit }: SignInProps) => {
  return (
    <Card className={s.container}>
      <Typography className={s.title} variant={'h1'}>
        Sign In
      </Typography>
      <div className={s.service}>
        <Link href={'#google#'}>
          <Image alt={'SignIn with google service'} height={36} src={gLogo} width={36} />
        </Link>
        <Link href={'#github#'}>
          <Image alt={'SignIn with github service'} height={36} src={gitLogo} width={36} />
        </Link>
      </div>
      <form onSubmit={onSubmit}>
        <ControlledTextField
          className={s.email}
          control={control}
          errorMessage={errorsWrapper.errors.email?.message}
          label={'Email'}
          name={'email'}
        />
        <ControlledTextField
          className={s.pass}
          control={control}
          errorMessage={errorsWrapper.errors.password?.message}
          label={'Password'}
          name={'password'}
          type={'password'}
        />
        <div className={s.forgot}>
          <Link href={'forgot-password'}>
            <Typography color={'form'} variant={'regular14'}>
              Forgot password
            </Typography>
          </Link>
        </div>
        <Button className={s.button} fullWidth>
          Sign In
        </Button>
        <div className={s.signup}>
          <Typography variant={'regular16'}>Don’t have an account?</Typography>
          <Link href={'sign-up'}>
            <Typography color={'primary'} variant={'h3'}>
              Sign Up
            </Typography>
          </Link>
        </div>
      </form>
    </Card>
  )
})
