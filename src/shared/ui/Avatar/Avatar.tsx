import { useState } from 'react'

import { NoCover } from '@/shared/assets/icons/noCover/NoCover'
import { clsx } from 'clsx'
import Image from 'next/image'

import s from './Avatar.module.scss'

export const Avatar = ({ height = 192, userAvatar, width = 192 }: Props) => {
  const [isError, setIsError] = useState(false)
  const classNames = {
    img: clsx(userAvatar && s.img),
  }

  return userAvatar && !isError ? (
    <Image
      alt={'User Avatar'}
      className={classNames.img}
      height={height}
      onError={() => setIsError(true)}
      priority
      src={userAvatar}
      width={width}
    />
  ) : (
    <NoCover />
  )
}

type Props = {
  height?: number
  userAvatar?: string
  width?: number
}
