import { Typography } from '@/shared/ui/Typography'
import Image from 'next/image'
import Link from 'next/link'

import s from './SideBar.module.scss'

import bookmarkIcon from '../../../../../public/assideIcons/bookmarkIcon.svg'
import createIcon from '../../../../../public/assideIcons/createIcon.svg'
import homeIcon from '../../../../../public/assideIcons/homeIcon.svg'
import logOutIcon from '../../../../../public/assideIcons/logOutIcon.svg'
import messengerIcon from '../../../../../public/assideIcons/messengerIcon.svg'
import profileIcon from '../../../../../public/assideIcons/profileIcon.svg'
import searchIcon from '../../../../../public/assideIcons/searchIcon.svg'
import statisticsIcon from '../../../../../public/assideIcons/statisticsIcon.svg'

export const SideBar = () => {
  return (
    <aside className={s.aside}>
      <Link href={'/home'}>
        <Image alt={'homeIcon'} src={homeIcon} />
        <Typography color={'light'} variant={'medium14'}>
          Home
        </Typography>
      </Link>
      <Link href={'/create'}>
        <Image alt={'createIcon'} src={createIcon} />
        <Typography color={'light'} variant={'medium14'}>
          Create
        </Typography>
      </Link>
      <Link href={'/profile'}>
        <Image alt={'profileIcon'} src={profileIcon} />
        <Typography color={'light'} variant={'medium14'}>
          MyProfile
        </Typography>
      </Link>
      <Link href={'/messenger'}>
        <Image alt={'messengerIcon'} src={messengerIcon} />
        <Typography color={'light'} variant={'medium14'}>
          Messenger
        </Typography>
      </Link>
      <Link href={'/search'}>
        <Image alt={'searchIcon'} src={searchIcon} />
        <Typography color={'light'} variant={'medium14'}>
          Search
        </Typography>
      </Link>
      <Link href={'/statistics'}>
        <Image alt={'statisticsIcon'} src={statisticsIcon} />
        <Typography color={'light'} variant={'medium14'}>
          Statistics
        </Typography>
      </Link>
      <Link href={'/favorites'}>
        <Image alt={'bookmarkIcon'} src={bookmarkIcon} />
        <Typography color={'light'} variant={'medium14'}>
          Favorites
        </Typography>
      </Link>
      <Link href={'/auth/sign-in'}>
        <Image alt={'logOutIcon'} src={logOutIcon} />
        <Typography color={'light'} variant={'medium14'}>
          Log Out
        </Typography>
      </Link>
    </aside>
  )
}
