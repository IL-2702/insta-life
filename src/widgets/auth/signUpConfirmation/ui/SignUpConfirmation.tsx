import { ROUTES } from '@/shared/constants/routes'
import { Button } from '@/shared/ui/Button'
import { Typography } from '@/shared/ui/Typography'
import { SignUpConfirmationProps } from '@/widgets/auth/signUpConfirmation/container'
import Image from 'next/image'
import Link from 'next/link'

import s from './SignUpConfirmation.module.scss'

import img from '../../../../../public/assets/congratulation.svg'

export const SignUpConfirmation = ({ t }: SignUpConfirmationProps) => {
  return (
    <div className={s.container}>
      <Typography variant={'h1'}>{t.auth.congratulationPage.title}</Typography>
      <div className={s.body}>
        <Typography variant={'regular16'}>
          {t.auth.congratulationPage.congratulationText}
        </Typography>
      </div>
      <div>
        <Button onClick={() => {}} variant={'primary'}>
          <Link href={ROUTES.LOGIN}>
            <Typography variant={'h3'}>{t.auth.button.signInButton}</Typography>
          </Link>
        </Button>
      </div>
      <Image alt={'Congratulation! Email confirmed'} height={352} src={img.src} width={473} />
    </div>
  )
}
