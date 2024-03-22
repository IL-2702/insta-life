import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cls } from 'react-image-crop'

import { Close } from '@/shared/assets/icons/Close'
import { Button } from '@/shared/ui/Button'
import * as Dialog from '@radix-ui/react-dialog'
import { PointerDownOutsideEvent } from '@radix-ui/react-dismissable-layer'
import clsx from 'clsx'

import s from './Modal.module.scss'

type ModalPropsType = {
  children: ReactNode
  className?: string
  customButtonsBlock?: ReactNode
  editPost?: boolean
  isPostModal?: boolean
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
  editPost,
  isPostModal = false,
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
    [s.DialogDescription]: true,
    [s.DialogDescription_postModal]: isPostModal,
  })

  const onPointerDownOutside = (e: PointerDownOutsideEvent) => {
    if (onPointerOutsideClickHandler) {
      e.preventDefault()
      onPointerOutsideClickHandler()
    }
  }
  const classNames = {
    content: clsx(s.DialogContent, className),
  }

  return (
    <Dialog.Root onOpenChange={modalHandler} open={open}>
      {modalTrigger && <Dialog.Trigger asChild>{modalTrigger}</Dialog.Trigger>}
      <Dialog.Portal>
        <div className={s.DialogOverlay} />
        <Dialog.Content
          className={classNames.content}
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
              {editPost ? (
                <Button onClick={onSubmit}>Save changes</Button>
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
