import { memo } from 'react'

import { ROUTES } from '@/shared/constants/routes'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Modal } from '@/shared/ui/Modal'
import { Typography } from '@/shared/ui/Typography'
import { ControlledCheckbox } from '@/shared/ui/controlledInsta/ControlledCheckbox/ControlledCheckbox'
import { ControlledTextField } from '@/shared/ui/controlledInsta/ControlledTextField/ControlledTextField'
import { SignUpProps } from '@/widgets/auth/signUp/container'
import Image from 'next/image'
import Link from 'next/link'
import gitLogo from 'public/assets/githubLogo.svg'
import gLogo from 'public/assets/googleLogo.svg'

import s from './SignUp.module.scss'

export const SignUp = memo(
  ({
    control,
    email,
    emailErrorMessage,
    handleCloseModal,
    isFormValid,
    isOpen,
    onSubmit,
    passwordConfirmationErrorMessage,
    passwordErrorMessage,
    pointerOutsideClickHandler,
    t,
    userNameErrorMessage,
  }: SignUpProps) => {
    return (
      <>
        <Card className={s.card}>
          <Typography as={'h2'} className={s.title} variant={'h1'}>
            {t.auth.signUpPage.title}
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
              label={t.auth.form.username}
              name={'userName'}
            />
            <ControlledTextField
              className={s.email}
              control={control}
              errorMessage={emailErrorMessage}
              label={t.auth.form.email}
              name={'email'}
              type={'email'}
            />
            <ControlledTextField
              className={s.password}
              control={control}
              errorMessage={passwordErrorMessage}
              label={t.auth.form.password}
              name={'password'}
              type={'password'}
            />
            <ControlledTextField
              className={s.passwordConfirmation}
              control={control}
              errorMessage={passwordConfirmationErrorMessage}
              label={t.auth.form.passwordConfirmation}
              name={'passwordConfirmation'}
              type={'password'}
            />
            <div className={s.checkAgreement}>
              <ControlledCheckbox control={control} name={'termsAgreement'} />
              <Typography color={'light'} variant={'link-small'}>
                I agree to the&nbsp;
                <Link href={ROUTES.TERMS_OF_SERVICE}>
                  <Typography as={'span'} color={'primary'} variant={'link-small'}>
                    {t.auth.termsOfServicePage.title}
                  </Typography>
                </Link>
                &nbsp;and&nbsp;
                <Link href={ROUTES.PRIVACY_POLICY}>
                  <Typography as={'span'} color={'primary'} variant={'link-small'}>
                    {t.auth.privacyPolicyPage.title}
                  </Typography>
                </Link>
              </Typography>
            </div>
            <Button className={s.submit} disabled={!isFormValid} fullWidth type={'submit'}>
              {t.auth.button.signUpButton}
            </Button>
            <div className={s.signInSuggestion}>
              <Typography variant={'regular16'}>{t.auth.signUpPage.question}</Typography>
              <Link href={'sign-in'}>
                <Typography color={'primary'} variant={'h3'}>
                  {t.auth.button.signInButton}
                </Typography>
              </Link>
            </div>
          </form>
        </Card>
        <Modal
          modalHandler={handleCloseModal}
          onPointerOutsideClickHandler={pointerOutsideClickHandler}
          open={isOpen}
          title={t.auth.modal.modalTitle}
        >
          <Typography variant={'regular16'}>
            {t.auth.modal.modalVerificationText.getEmail(email)}
          </Typography>
        </Modal>
      </>
    )
  }
)
