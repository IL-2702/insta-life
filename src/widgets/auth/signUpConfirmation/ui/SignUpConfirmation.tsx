import { Button } from '@/shared/ui/Button'
import { Typography } from '@/shared/ui/Typography'
import { SignUpConfirmationProps } from '@/widgets/auth/signUpConfirmation/container'
import Image from 'next/image'

import s from './SignUpConfirmation.module.scss'

import img from '../../../../../public/assets/congratulation.svg'

export const SignUpConfirmation = ({}: SignUpConfirmationProps) => {
  return (
    <div className={s.container}>
      <Typography variant={'h1'}>Congratulations!</Typography>
      <div className={s.body}>
        <Typography variant={'regular16'}>Your email has been confirmed</Typography>
      </div>
      <div>
        <Button onClick={() => {}} variant={'primary'}>
          <Typography variant={'h3'}>Sign In</Typography>
        </Button>
      </div>
      <Image alt={'Congratulation! Email confirmed'} height={352} src={img.src} width={473} />
    </div>
  )
}
