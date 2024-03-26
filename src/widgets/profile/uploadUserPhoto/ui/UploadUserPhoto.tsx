import { memo } from 'react'

import { Avatar } from '@/shared/ui/Avatar'
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
    deleteAvatarHandler,
    isDeleteOpen,
    isLoadingDeleteAvatar,
    isUploadOpen,
    setIsDeleteOpen,
    setIsUploadOpen,
    t,
  }: UploadUserPhotoProps) => {
    return (
      <>
        <div className={s.container}>
          <div className={s.avatarWrapper}>
            <Avatar height={avaHeight} userAvatar={avatar} width={avaWidth} />
            {avatar && (
              <Button className={s.delAvatarBtn} onClick={() => setIsDeleteOpen(true)}>
                <Image alt={'delete Avatar'} height={16} src={close} width={16} />
              </Button>
            )}
          </div>
          <Button onClick={() => setIsUploadOpen(true)} variant={'outlined'}>
            <Typography variant={'h3'}>{t.button.addAProfilePhoto}</Typography>
          </Button>
        </div>
        {/*<Modal*/}
        {/*  className={s.modal}*/}
        {/*  customButtonsBlock={<></>}*/}
        {/*  modalHandler={setIsUploadOpen}*/}
        {/*  open={isUploadOpen}*/}
        {/*  title={t.modal.addPhotoModalTitle}*/}
        {/*>*/}
        {/*  <UploadUserPhotoForm onClose={() => setIsUploadOpen(false)} />*/}
        {/*</Modal>*/}
        <Modal
          className={s.modal}
          customButtonsBlock={<></>}
          modalHandler={setIsDeleteOpen}
          open={isDeleteOpen}
          title={t.modal.deleteUserAvatar}
        >
          <div>
            <Typography variant={'regular16'}>{t.modal.deleteUserAvatarText}</Typography>
            <div className={s.confirmButtonWrapper}>
              <Button
                disabled={isLoadingDeleteAvatar}
                isLoading={isLoadingDeleteAvatar}
                onClick={deleteAvatarHandler}
              >
                <Typography variant={'h3'}>{t.button.yes}</Typography>
              </Button>
              <Button
                disabled={isLoadingDeleteAvatar}
                onClick={() => setIsDeleteOpen(false)}
                variant={'outlined'}
              >
                <Typography variant={'h3'}>{t.button.no}</Typography>
              </Button>
            </div>
          </div>
        </Modal>
      </>
    )
  }
)
