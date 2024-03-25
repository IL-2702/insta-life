import { memo } from 'react'

import { GeneralInformationProps } from '@/widgets/profile/profileSettings/ui/generalInformation/container'
import { UploadUserPhoto } from '@/widgets/profile/uploadUserPhoto'

import s from './GeneralInformation.module.scss'

export const GeneralInformation = memo(({}: GeneralInformationProps) => {
  return (
    <div className={s.container}>
      <UploadUserPhoto.widget />
    </div>
  )
})
