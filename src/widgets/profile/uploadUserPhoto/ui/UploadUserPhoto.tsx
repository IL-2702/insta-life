import { memo } from 'react'

import { Button } from '@/shared/ui/Button'
import { Modal } from '@/shared/ui/Modal'
import { Typography } from '@/shared/ui/Typography'
import { UploadUserPhotoProps } from '@/widgets/profile/uploadUserPhoto/container'
import { UploadUserPhotoForm } from '@/widgets/profile/uploadUserPhoto/ui/form/UploadUserPhotoForm'
import { UserAvatar } from '@/widgets/profile/uploadUserPhoto/ui/form/ui/avatar/userAvatar'
import Image from 'next/image'

import s from './UploadUserPhoto.module.scss'

export const UploadUserPhoto = memo(({ isModalOpen, setIsModalOpen, t }: UploadUserPhotoProps) => {
  return (
    <>
      <div className={s.container}>
        <UserAvatar />
        <Button onClick={() => setIsModalOpen(true)} variant={'outlined'}>
          <Typography variant={'h3'}>{t.button.addAProfilePhoto}</Typography>
        </Button>
      </div>
      <Modal
        className={s.modal}
        customButtonsBlock={<></>}
        modalHandler={setIsModalOpen}
        open={isModalOpen}
        title={t.modal.addPhotoModalTitle}
      >
        <UploadUserPhotoForm />
      </Modal>
    </>
  )
})
