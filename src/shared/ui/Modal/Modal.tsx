import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Close } from '@/shared/assets/icons/Close'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { Button } from '@/shared/ui/Button'
import * as Dialog from '@radix-ui/react-dialog'
import { PointerDownOutsideEvent } from '@radix-ui/react-dismissable-layer'
import clsx from 'clsx'

import s from './Modal.module.scss'

type ModalPropsType = {
  children: ReactNode
  className?: string
  customButtonsBlock?: ReactNode
  isPostModal?: boolean
  logOut?: boolean
  modalHandler?: (isOpen: boolean) => void
  modalTrigger?: ReactNode
  nextStepBtn?: ReactNode
  onPointerOutsideClickHandler?: () => void
  onSubmit?: () => void
  open?: boolean
  previousStepBtn?: ReactNode
  title?: string
} & ComponentPropsWithoutRef<'div'>

export const Modal = ({
  children,
  className,
  customButtonsBlock = false,
  isPostModal = false,
  logOut,
  modalHandler,
  modalTrigger,
  nextStepBtn = false,
  onPointerOutsideClickHandler,
  onSubmit,
  open,
  previousStepBtn = false,
  title,
}: ModalPropsType) => {
  const modalContentClassName = clsx({
    className,
    [s.DialogDescription]: true,
    [s.DialogDescription_postModal]: isPostModal,
  })

  const modalClassName = { root: clsx(s.DialogContent, className) }

  const { t } = useTranslation()

  const onPointerDownOutside = (e: PointerDownOutsideEvent) => {
    if (onPointerOutsideClickHandler) {
      e.preventDefault()
      onPointerOutsideClickHandler()
    }
  }

  return (
    <Dialog.Root onOpenChange={modalHandler} open={open}>
      {modalTrigger && <Dialog.Trigger asChild>{modalTrigger}</Dialog.Trigger>}
      <Dialog.Portal>
        <div className={s.DialogOverlay} />
        <Dialog.Content
          className={modalClassName.root}
          onOpenAutoFocus={e => e.preventDefault()}
          onPointerDownOutside={onPointerDownOutside}
        >
          <div className={s.modalHeader}>
            {previousStepBtn}
            <Dialog.Title className={s.DialogTitle}>{title}</Dialog.Title>
            {nextStepBtn ? (
              nextStepBtn
            ) : (
              <Dialog.Close asChild>
                <Button className={s.closeBtn}>
                  <Close />
                </Button>
              </Dialog.Close>
            )}
          </div>
          <hr className={s.border} />
          <Dialog.Description asChild className={modalContentClassName}>
            {children}
          </Dialog.Description>
          {customButtonsBlock ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 'auto',
              }}
            >
              {customButtonsBlock}
            </div>
          ) : (
            <div
              style={{ display: 'flex', justifyContent: 'flex-end', margin: '18px 24px 36px 0' }}
            >
              {logOut ? (
                <div>
                  <Button className={s.btnYes} onClick={onSubmit} variant={'outlined'}>
                    {t.auth.modal.yesButton}
                  </Button>
                  <Dialog.Close asChild>
                    <Button>{t.auth.modal.noButton}</Button>
                  </Dialog.Close>
                </div>
              ) : (
                <Dialog.Close asChild>
                  <Button onClick={onSubmit}>OK</Button>
                </Dialog.Close>
              )}
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
