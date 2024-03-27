import { Button } from '@/shared/ui/Button'
import { Modal } from '@/shared/ui/Modal'
import { Typography } from '@/shared/ui/Typography'
import Image from 'next/image'
import img from 'public/assets/expiredLink.svg'

import s from 'src/widgets/auth/confirmationLinkExpired/ui/ConfirmationLinkExpired.module.scss'

import { ConfirmationLinkExpiredContainerProps } from '../container'

export const ConfirmationLinkExpired = ({
  email,
  handleCloseModal,
  isDisabled,
  isLoading,
  isOpen,
  onResendLink,
  setIsOpen,
  t,
}: ConfirmationLinkExpiredContainerProps) => {
  return (
    <div className={s.container}>
      <Typography variant={'h1'}>{t.auth.verificationPage.linkExpiredTitle}</Typography>
      <div className={s.body}>
        <Typography variant={'regular16'}>{t.auth.verificationPage.verificationText}</Typography>
      </div>
      <div>
        <Button
          disabled={isDisabled}
          isLoading={isLoading}
          onClick={onResendLink}
          variant={'primary'}
        >
          <Typography variant={'h3'}>{!isLoading && `${t.auth.button.sendLink}`}</Typography>
        </Button>
      </div>
      <Image alt={'Verification link expired'} height={352} src={img.src} width={473} />
      <Modal
        modalHandler={handleCloseModal}
        onPointerOutsideClickHandler={() => setIsOpen(false)}
        open={isOpen}
        title={t.auth.modal.modalTitle}
      >
        <Typography
          variant={'regular16'}
        >{`We have sent a link to confirm your email to ${email}`}</Typography>
      </Modal>
    </div>
  )
}
