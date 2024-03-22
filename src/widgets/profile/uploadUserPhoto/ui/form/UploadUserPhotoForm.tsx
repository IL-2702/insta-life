import { Typography } from '@/shared/ui/Typography'
import { useUploadUserPhotoForm } from '@/widgets/profile/uploadUserPhoto/ui/form/hooks/useUploadUserPhotoForm'
import { NoCover } from '@/widgets/profile/uploadUserPhoto/ui/form/ui/noCover'
import { UserPhotoCrop } from '@/widgets/profile/uploadUserPhoto/ui/form/ui/userPhotoCrop'
import { clsx } from 'clsx'

import 'react-image-crop/src/ReactCrop.scss'

import s from './UploadUserPhotoForm.module.scss'

export const UploadUserPhotoForm = ({ currUserPhoto }: Props) => {
  const { control, extraActionsUserPhoto, handleSubmit, userPhoto, userPhotoError } =
    useUploadUserPhotoForm(currUserPhoto)
  const classNames = {
    errorWrapper: s.errorWrapper,
    form: clsx(s.form, !userPhotoError && s.noError),
  }

  return (
    <>
      {userPhotoError && (
        <div className={classNames.errorWrapper}>
          <Typography variant={'error'}>{userPhotoError}</Typography>
        </div>
      )}
      <form className={classNames.form} onSubmit={handleSubmit(data => console.log(data))}>
        {userPhoto ? (
          <UserPhotoCrop userPhoto={userPhoto} />
        ) : (
          <NoCover control={control} extraActionsUserPhoto={extraActionsUserPhoto} />
        )}
      </form>
    </>
  )
}

type Props = {
  currUserPhoto?: string
}
