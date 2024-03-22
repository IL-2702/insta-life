import { Typography } from '@/shared/ui/Typography'

import s from './UserStats.module.scss'

export const UserStat = ({ count, title }: Props) => {
  return (
    <div className={s.statContainer}>
      <Typography as={'span'} variant={'bold14'}>
        {count}
      </Typography>
      <Typography as={'span'} variant={'regular14'}>
        {title}
      </Typography>
    </div>
  )
}
type Props = {
  count: number
  title: string
}
