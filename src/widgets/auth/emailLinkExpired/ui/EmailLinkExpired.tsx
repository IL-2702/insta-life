import { getBaseLayout } from '@/layouts/publ/BaseLayout/BaseLayout'
import { Button } from '@/shared/ui/Button'
import { Typography } from '@/shared/ui/Typography'
import { EmailLinkExpiredContainerProps } from '@/widgets/auth/emailLinkExpired/container'
import Image from 'next/image'

import s from './EmailLinkExpired.module.scss'

import img from '../../../../../public/assets/expiredLink.svg'

export const EmailLinkExpired = ({}: EmailLinkExpiredContainerProps) => {
  return (
    <div className={s.container}>
      <Typography variant={'h1'}>Email verification link expired</Typography>
      <div className={s.body}>
        <Typography variant={'regular16'}>
          Looks like the verification link has expired. Not to worry, we can send the link again
        </Typography>
      </div>
      <div>
        <Button onClick={() => {}} variant={'primary'}>
          <Typography variant={'h3'}>Resend link</Typography>
        </Button>
      </div>
      <Image alt={'Verification link expired'} height={352} src={img.src} width={473} />
    </div>
  )
}
