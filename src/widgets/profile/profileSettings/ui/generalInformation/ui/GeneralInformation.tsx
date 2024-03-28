import { memo, useEffect, useState } from 'react'

import { Button } from '@/shared/ui/Button'
import { TextArea } from '@/shared/ui/TextArea'
import { Typography } from '@/shared/ui/Typography'
import { GeneralInformationProps } from '@/widgets/profile/profileSettings/ui/generalInformation/container'
import { TextFields } from '@/widgets/profile/profileSettings/ui/generalInformation/ui/textFields'
import { UploadUserPhoto } from '@/widgets/profile/uploadUserPhoto'

import s from './GeneralInformation.module.scss'

export const GeneralInformation = memo(({}: GeneralInformationProps) => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        {<UploadUserPhoto.widget />}
        {<TextFields.widget />}
      </div>
      <Button className={s.button}>
        <Typography>Save Changes</Typography>
      </Button>
    </section>
  )
})
