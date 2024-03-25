import { DeleteAva } from '@/shared/assets/icons/DeleteAva/DeleteAva'
import { clsx } from 'clsx'
import Image from 'next/image'

import s from './Avatar.module.scss'

import noCover from '../../../../public/assets/noCover.svg'
export const Avatar = ({ height = 192, userAvatar, width = 192 }: Props) => {
  const classNames = {
    img: clsx(userAvatar && s.img),
  }

  return userAvatar ? (
    <Image
      alt={'User Avatar'}
      className={classNames.img}
      height={height}
      priority
      src={userAvatar}
      width={width}
    />
  ) : (
    <DeleteAva />
  )
}

type Props = {
  height?: number
  userAvatar?: string
  width?: number
}
