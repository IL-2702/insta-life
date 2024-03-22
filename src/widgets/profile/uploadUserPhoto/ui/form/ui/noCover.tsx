import { Control } from 'react-hook-form'

import { Typography } from '@/shared/ui/Typography'
import { ControlledFileUploader } from '@/shared/ui/controlledInsta/ControlledFileUploader/ControlledFileUploader'
import Image from 'next/image'

import s from './noCover.module.scss'

import noCover from '../../../../../../../public/assets/noCover.jpg'

export const NoCover = ({ control, extraActionsUserPhoto }: Props) => {
  return (
    <>
      <Image alt={'no Photo'} className={s.noCover} height={228} src={noCover} width={228} />
      <ControlledFileUploader
        className={s.input}
        control={control}
        extraActions={extraActionsUserPhoto}
        name={'userPhoto'}
      >
        <Typography variant={'h3'}>Select from Computer</Typography>
      </ControlledFileUploader>
    </>
  )
}

type Props = {
  control: Control<{ userPhoto?: File | undefined }, any>
  extraActionsUserPhoto: (inputValue: string) => void
}
