import { Button } from '@/shared/ui/Button'
import { clsx } from 'clsx'
import Image from 'next/image'

import s from './Avatar.module.scss'

import close from '../../../../public/assets/close-outline.svg'
import noCover from '../../../../public/assets/noCover.svg'
export const Avatar = ({ height = 192, userAvatar, width = 192 }: Props) => {
  const classNames = {
    avatar: clsx(userAvatar ? s.avatar : s.noCover),
    img: clsx(userAvatar && s.img),
  }

  return (
    <div className={classNames.avatar} style={{ height: height, width: width }}>
      <Image
        alt={'User Avatar'}
        className={classNames.img}
        height={userAvatar ? height : 48}
        loading={'lazy'}
        src={userAvatar || noCover}
        width={userAvatar ? width : 48}
      />
      {userAvatar && (
        <Button className={s.delAvatarBtn}>
          <Image alt={'delete Avatar'} height={16} src={close} width={16} />
        </Button>
      )}
    </div>
  )
}

type Props = {
  height?: number
  userAvatar?: string
  width?: number
}
