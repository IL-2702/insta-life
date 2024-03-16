import ReCAPTCHA from 'react-google-recaptcha'

import { Button } from '@/shared/ui/Button'
import { Modal } from '@/shared/ui/Modal'
import { Typography } from '@/shared/ui/Typography'
import { EmailLinkExpiredContainerProps } from '@/widgets/auth/emailLinkExpired/container'
import Image from 'next/image'

import s from './EmailLinkExpired.module.scss'

import img from '../../../../../public/assets/expiredLink.svg'

export const EmailLinkExpired = ({
  captchaRef,
  email,
  handleCloseModal,
  handleSetToken,
  isDisabled,
  isLoading,
  isOpen,
  onRecentLink,
  publicKey,
  setIsOpen,
}: EmailLinkExpiredContainerProps) => {
  return (
    <div className={s.container}>
      <Typography variant={'h1'}>Email verification link expired</Typography>
      <div className={s.body}>
        <Typography variant={'regular16'}>
          Looks like the verification link has expired. Not to worry, we can send the link again
        </Typography>
      </div>
      <div>
        <Button
          disabled={isDisabled}
          isLoading={isLoading}
          onClick={onRecentLink}
          variant={'primary'}
        >
          <Typography variant={'h3'}>{!isLoading && 'Resend link'}</Typography>
        </Button>
      </div>
      <div className={s.recaptchaWrapper}>
        <ReCAPTCHA
          onChange={token => handleSetToken(token as string)}
          ref={captchaRef}
          sitekey={publicKey!}
          theme={'dark'}
        />
      </div>
      <Image alt={'Verification link expired'} height={352} src={img.src} width={473} />
      <Modal
        modalHandler={handleCloseModal}
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
