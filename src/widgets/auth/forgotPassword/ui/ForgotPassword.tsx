import ReCAPTCHA from 'react-google-recaptcha'

import { ROUTES } from '@/shared/constants/routes'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Modal } from '@/shared/ui/Modal'
import { Typography } from '@/shared/ui/Typography'
import { ControlledTextField } from '@/shared/ui/controlledInsta/ControlledTextField/ControlledTextField'
import { ForgotPasswordProps } from '@/widgets/auth/forgotPassword/container'
import Link from 'next/link'

import s from './ForgotPassword.module.scss'

export const ForgotPassword = ({
  captchaRef,
  control,
  email,
  emailError,
  handleCloseModal,
  handleSetToken,
  isDisabled,
  isLoadingPasswordRecovery,
  isOpen,
  isResendLinkAgain,
  locale,
  onSubmit,
  publicKey,
  setIsOpen,
  t,
}: ForgotPasswordProps) => {
  return (
    <div className={s.container}>
      <Card className={s.card}>
        <Typography variant={'h1'}>{t.auth.forgotPasswordPage.title}</Typography>
        <form onSubmit={onSubmit}>
          <ControlledTextField
            className={s.email}
            control={control}
            //@ts-ignore
            errorMessage={emailError && t.auth.error[emailError]}
            label={t.auth.form.email}
            name={'email'}
          />
          <Typography className={s.subtitle} variant={'regular14'}>
            {t.auth.forgotPasswordPage.enterYourEmailText}
          </Typography>
          {isResendLinkAgain && (
            <Typography className={s.subtitleTwo} color={'light'} variant={'regular14'}>
              {t.auth.forgotPasswordPage.linkHasBeenSentText}
            </Typography>
          )}
          <Button
            className={s.registerBtn}
            disabled={isDisabled}
            fullWidth
            isLoading={isLoadingPasswordRecovery}
            type={'submit'}
          >
            <Typography variant={'h3'}>
              {isResendLinkAgain
                ? !isLoadingPasswordRecovery && `${t.auth.button.sendLinkAgain}`
                : !isLoadingPasswordRecovery && `${t.auth.button.sendLink}`}
            </Typography>
          </Button>
        </form>
        <Link className={s.link} href={ROUTES.LOGIN}>
          <Typography variant={'h3'}>{t.auth.button.backToSignIn}</Typography>
        </Link>
        <div className={s.recaptchaWrapper}>
          <ReCAPTCHA
            hl={locale}
            key={locale}
            onChange={token => handleSetToken(token as string)}
            ref={captchaRef}
            sitekey={publicKey!}
            theme={'dark'}
          />
        </div>
      </Card>
      <Modal
        modalHandler={handleCloseModal}
        onPointerOutsideClickHandler={() => setIsOpen(false)}
        open={isOpen}
        title={t.auth.modal.modalTitle}
      >
        <Typography variant={'regular16'}>
          {t.auth.modal.modalVerificationText.getEmail(email)}
        </Typography>
      </Modal>
    </div>
  )
}
