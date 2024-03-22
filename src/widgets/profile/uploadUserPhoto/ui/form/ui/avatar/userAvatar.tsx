import { Button } from '@/shared/ui/Button'
import { clsx } from 'clsx'
import Image from 'next/image'

import s from './userAvatar.module.scss'

import close from '../../../../../../../../public/assets/close-outline.svg'
import noCover from '../../../../../../../../public/assets/noCover.svg'
import test from '../../../../../../../../public/assets/testgif.jpg'
export const UserAvatar = ({ userAvatar }: Props) => {
  const classNames = {
    avatar: clsx(!userAvatar ? s.avatar : s.noCover),
    img: clsx(!userAvatar && s.img),
  }

  return (
    <div className={classNames.avatar}>
      <Image
        alt={'User Avatar'}
        className={classNames.img}
        height={192}
        loading={'lazy'}
        src={test}
        width={192}
      />
      {!userAvatar && (
        <Button className={s.delAvatarBtn}>
          <Image alt={'delete Avatar'} height={16} src={close} width={16} />
        </Button>
      )}
    </div>
  )
}

type Props = {
  userAvatar?: string
}
