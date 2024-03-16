import { BookMark } from '@/shared/assets/icons/asideIcons/bookmarkIcon/BookmarkIcon'
import { CreateIcon } from '@/shared/assets/icons/asideIcons/createIcon/CreateIcon'
import { HomeIcon } from '@/shared/assets/icons/asideIcons/homeIcon'
import { LogOutIcon } from '@/shared/assets/icons/asideIcons/logOutIcon'
import { MessengerIcon } from '@/shared/assets/icons/asideIcons/messengerIcon'
import { ProfileIcon } from '@/shared/assets/icons/asideIcons/profileIcon'
import { SearchIcon } from '@/shared/assets/icons/asideIcons/searchIcon'
import { StatisticsIcon } from '@/shared/assets/icons/asideIcons/statisticsIcon'
import { ROUTES } from '@/shared/constants/routes'
import { Typography } from '@/shared/ui/Typography'
import Link from 'next/link'
import { useRouter } from 'next/router'

import s from './SideBar.module.scss'

export const SideBar = () => {
  const router = useRouter()
  const { pathname } = router

  return (
    <aside className={s.aside}>
      <Link className={pathname === ROUTES.HOME ? s.activeLink : ''} href={ROUTES.HOME}>
        <HomeIcon className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          Home
        </Typography>
      </Link>
      <Link className={pathname === ROUTES.CREATE ? s.activeLink : ''} href={ROUTES.CREATE}>
        <CreateIcon className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          Create
        </Typography>
      </Link>
      <Link className={pathname === ROUTES.PROFILE ? s.activeLink : ''} href={ROUTES.PROFILE}>
        <ProfileIcon className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          MyProfile
        </Typography>
      </Link>
      <Link className={pathname === ROUTES.MESSENGER ? s.activeLink : ''} href={ROUTES.MESSENGER}>
        <MessengerIcon className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          Messenger
        </Typography>
      </Link>
      <Link className={pathname === ROUTES.SEARCH ? s.activeLink : ''} href={ROUTES.SEARCH}>
        <SearchIcon className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          Search
        </Typography>
      </Link>
      <Link className={pathname === ROUTES.STATISTICS ? s.activeLink : ''} href={ROUTES.STATISTICS}>
        <StatisticsIcon className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          Statistics
        </Typography>
      </Link>
      <Link className={pathname === ROUTES.FAVORITES ? s.activeLink : ''} href={ROUTES.FAVORITES}>
        <BookMark className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          Favorites
        </Typography>
      </Link>
      <Link href={ROUTES.LOGIN}>
        <LogOutIcon className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          Log Out
        </Typography>
      </Link>
    </aside>
  )
}
