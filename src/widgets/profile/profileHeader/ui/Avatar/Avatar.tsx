import { Typography } from '@/shared/ui/Typography'

import s from './Avatar.module.scss'

export const Avatar = () => {
  return (
    <div className={s.avatar}>
      <Typography as={'span'} variant={'h1'}>
        Avatar
      </Typography>
    </div>
  )
}
