import { memo } from 'react'

import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Button } from '@/shared/ui/Button'
import { Modal } from '@/shared/ui/Modal'
import { Typography } from '@/shared/ui/Typography'
import { UploadUserPhotoProps } from '@/widgets/profile/uploadUserPhoto/container'
import { UploadUserPhotoForm } from '@/widgets/profile/uploadUserPhoto/ui/form/UploadUserPhotoForm'
import Image from 'next/image'

import s from './UploadUserPhoto.module.scss'

import close from '../../../../../public/assets/close-outline.svg'

export const UploadUserPhoto = memo(
  ({
    avaHeight,
    avaWidth,
    avatar,
    deleteAvatar,
    isModalOpen,
    setIsModalOpen,
    t,
  }: UploadUserPhotoProps) => {
    return (
      <>
        <div className={s.container}>
          <div className={s.avatarWrapper}>
            <Avatar height={avaHeight} userAvatar={avatar} width={avaWidth} />
            {avatar && (
              <Button className={s.delAvatarBtn} onClick={() => deleteAvatar()}>
                <Image alt={'delete Avatar'} height={16} src={close} width={16} />
              </Button>
            )}
          </div>
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
