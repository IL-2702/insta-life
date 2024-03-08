import { BookMark } from '@/shared/assets/icons/asideIcons/bookmarkIcon/BookmarkIcon'
import { CreateIcon } from '@/shared/assets/icons/asideIcons/createIcon/CreateIcon'
import { HomeIcon } from '@/shared/assets/icons/asideIcons/homeIcon'
import { LogOutIcon } from '@/shared/assets/icons/asideIcons/logOutIcon'
import { MessengerIcon } from '@/shared/assets/icons/asideIcons/messengerIcon'
import { ProfileIcon } from '@/shared/assets/icons/asideIcons/profileIcon'
import { SearchIcon } from '@/shared/assets/icons/asideIcons/searchIcon'
import { StatisticsIcon } from '@/shared/assets/icons/asideIcons/statisticsIcon'
import { Typography } from '@/shared/ui/Typography'
import Link from 'next/link'

import s from './SideBar.module.scss'

export const SideBar = () => {
  return (
    <aside className={s.aside}>
      <Link href={'/home'}>
        <HomeIcon />
        <Typography color={'light'} variant={'medium14'}>
          Home
        </Typography>
      </Link>
      <Link href={'/create'}>
        <CreateIcon />
        <Typography color={'light'} variant={'medium14'}>
          Create
        </Typography>
      </Link>
      <Link href={'/profile'}>
        <ProfileIcon />
        <Typography color={'light'} variant={'medium14'}>
          MyProfile
        </Typography>
      </Link>
      <Link href={'/messenger'}>
        <MessengerIcon />
        <Typography color={'light'} variant={'medium14'}>
          Messenger
        </Typography>
      </Link>
      <Link href={'/search'}>
        <SearchIcon />
        <Typography color={'light'} variant={'medium14'}>
          Search
        </Typography>
      </Link>
      <Link href={'/statistics'}>
        <StatisticsIcon />
        <Typography color={'light'} variant={'medium14'}>
          Statistics
        </Typography>
      </Link>
      <Link href={'/favorites'}>
        <BookMark />
        <Typography color={'light'} variant={'medium14'}>
          Favorites
        </Typography>
      </Link>
      <Link href={'/auth/sign-in'}>
        <LogOutIcon />
        <Typography color={'light'} variant={'medium14'}>
          Log Out
        </Typography>
      </Link>
    </aside>
  )
}
