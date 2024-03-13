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
import { useRouter } from 'next/router'

import s from './SideBar.module.scss'

export const SideBar = () => {
  const router = useRouter()
  const { pathname } = router

  return (
    <aside className={s.aside}>
      <Link className={pathname === '/home' ? s.activeLink : ''} href={'/home'}>
        <HomeIcon className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          Home
        </Typography>
      </Link>
      <Link className={pathname === '/create' ? s.activeLink : ''} href={'/create'}>
        <CreateIcon className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          Create
        </Typography>
      </Link>
      <Link className={pathname === '/profile' ? s.activeLink : ''} href={'/profile'}>
        <ProfileIcon className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          MyProfile
        </Typography>
      </Link>
      <Link className={pathname === '/messenger' ? s.activeLink : ''} href={'/messenger'}>
        <MessengerIcon className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          Messenger
        </Typography>
      </Link>
      <Link className={pathname === '/search' ? s.activeLink : ''} href={'/search'}>
        <SearchIcon className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          Search
        </Typography>
      </Link>
      <Link className={pathname === '/statistics' ? s.activeLink : ''} href={'/statistics'}>
        <StatisticsIcon className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          Statistics
        </Typography>
      </Link>
      <Link className={pathname === '/favorites' ? s.activeLink : ''} href={'/favorites'}>
        <BookMark className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          Favorites
        </Typography>
      </Link>
      <Link href={'/auth/sign-in'}>
        <LogOutIcon className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          Log Out
        </Typography>
      </Link>
    </aside>
  )
}
