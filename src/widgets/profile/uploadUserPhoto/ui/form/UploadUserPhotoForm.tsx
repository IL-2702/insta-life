import { Typography } from '@/shared/ui/Typography'
import { useUploadUserPhotoForm } from '@/widgets/profile/uploadUserPhoto/ui/form/hooks/useUploadUserPhotoForm'
import { NoCover } from '@/widgets/profile/uploadUserPhoto/ui/form/ui/noCover/noCover'
import { UserPhotoCrop } from '@/widgets/profile/uploadUserPhoto/ui/form/ui/userPhotoCrop/userPhotoCrop'
import { clsx } from 'clsx'

import 'react-image-crop/src/ReactCrop.scss'

import s from './UploadUserPhotoForm.module.scss'

export const UploadUserPhotoForm = ({ currUserPhoto, onClose }: Props) => {
  const {
    control,
    extraActionsUserPhoto,
    handleSubmit,
    isLoadingUploadAvatar,
    t,
    uploadAvatarHandler,
    userPhoto,
    userPhotoError,
  } = useUploadUserPhotoForm(currUserPhoto, onClose)
  const classNames = {
    errorWrapper: clsx(s.errorWrapper, !userPhotoError && s.hidden),
    form: clsx(s.form, !userPhotoError && s.noError),
  }

  return (
    <>
      <div className={classNames.errorWrapper}>
        {userPhotoError && (
          //@ts-ignore
          <Typography variant={'error'}>{t.myProfile.error[userPhotoError]}</Typography>
        )}
      </div>

      <form className={classNames.form} onSubmit={handleSubmit(() => {})}>
        {userPhoto ? (
          <UserPhotoCrop
            isLoading={isLoadingUploadAvatar}
            uploadAvatar={uploadAvatarHandler}
            userPhoto={userPhoto}
          />
        ) : (
          <NoCover control={control} extraActionsUserPhoto={extraActionsUserPhoto} t={t} />
        )}
      </form>
    </>
  )
}

type Props = {
  currUserPhoto?: string
  onClose: () => void
}
