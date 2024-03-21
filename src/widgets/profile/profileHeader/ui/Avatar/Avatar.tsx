import { Typography } from '@/shared/ui/Typography'
import { Avatar as AvatarType } from '@/widgets/profile/types'
import Image from 'next/image'

import s from './Avatar.module.scss'

export const Avatar = ({ avatar }: Props) => {
  const avatarRender = avatar ? (
    <Image alt={'avatar'} height={avatar.height} src={avatar.url} width={avatar.width} />
  ) : (
    <div className={s.avatar}>
      <Typography as={'span'} variant={'h1'}>
        Avatar
      </Typography>
    </div>
  )

  return <>{avatarRender}</>
}

type Props = {
  avatar: AvatarType
}
