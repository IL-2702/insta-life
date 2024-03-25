import { memo } from 'react'

import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Button } from '@/shared/ui/Button'
import { Modal } from '@/shared/ui/Modal'
import { Typography } from '@/shared/ui/Typography'
import { UploadUserPhotoProps } from '@/widgets/profile/uploadUserPhoto/container'
import { UploadUserPhotoForm } from '@/widgets/profile/uploadUserPhoto/ui/form/UploadUserPhotoForm'

import s from './UploadUserPhoto.module.scss'

export const UploadUserPhoto = memo(
  ({ avaHeight, avaWidth, avatar, isModalOpen, setIsModalOpen, t }: UploadUserPhotoProps) => {
    return (
      <>
        <div className={s.container}>
          <Avatar height={avaHeight} userAvatar={avatar} width={avaWidth} />
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
  }
)
