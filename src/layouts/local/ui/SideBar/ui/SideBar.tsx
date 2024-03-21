import { SideBarProps } from '@/layouts/local/ui/SideBar/container'
import { BookMark } from '@/shared/assets/icons/asideIcons/bookmarkIcon/BookmarkIcon'
import { CreateIcon } from '@/shared/assets/icons/asideIcons/createIcon/CreateIcon'
import { HomeIcon } from '@/shared/assets/icons/asideIcons/homeIcon'
import { LogOutIcon } from '@/shared/assets/icons/asideIcons/logOutIcon'
import { MessengerIcon } from '@/shared/assets/icons/asideIcons/messengerIcon'
import { ProfileIcon } from '@/shared/assets/icons/asideIcons/profileIcon'
import { SearchIcon } from '@/shared/assets/icons/asideIcons/searchIcon'
import { StatisticsIcon } from '@/shared/assets/icons/asideIcons/statisticsIcon'
import { ROUTES } from '@/shared/constants/routes'
import { Button } from '@/shared/ui/Button'
import { Modal } from '@/shared/ui/Modal'
import { Typography } from '@/shared/ui/Typography'
import Link from 'next/link'

import s from './SideBar.module.scss'

export const SideBar = ({ email, handleLogOut, isOpen, pathname, setIsOpen, t }: SideBarProps) => {
  return (
    <aside className={s.aside}>
      <Link className={pathname === ROUTES.HOME ? s.activeLink : ''} href={ROUTES.HOME}>
        <HomeIcon className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          {t.sidebar.home}
        </Typography>
      </Link>
      <Link className={pathname === ROUTES.CREATE ? s.activeLink : ''} href={ROUTES.CREATE}>
        <CreateIcon className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          {t.sidebar.create}
        </Typography>
      </Link>
      <Link className={pathname === ROUTES.PROFILE ? s.activeLink : ''} href={ROUTES.PROFILE}>
        <ProfileIcon className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          {t.sidebar.myProfile}
        </Typography>
      </Link>
      <Link className={pathname === ROUTES.MESSENGER ? s.activeLink : ''} href={ROUTES.MESSENGER}>
        <MessengerIcon className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          {t.sidebar.messenger}
        </Typography>
      </Link>
      <Link className={pathname === ROUTES.SEARCH ? s.activeLink : ''} href={ROUTES.SEARCH}>
        <SearchIcon className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          {t.sidebar.search}
        </Typography>
      </Link>
      <Link className={pathname === ROUTES.STATISTICS ? s.activeLink : ''} href={ROUTES.STATISTICS}>
        <StatisticsIcon className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          {t.sidebar.statistics}
        </Typography>
      </Link>
      <Link className={pathname === ROUTES.FAVORITES ? s.activeLink : ''} href={ROUTES.FAVORITES}>
        <BookMark className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          {t.sidebar.favourites}
        </Typography>
      </Link>
      <Button className={s.button} onClick={() => setIsOpen(true)} variant={'link'}>
        <LogOutIcon className={s.navIcon} />
        <Typography className={s.navLink} color={'light'} variant={'medium14'}>
          {t.sidebar.logOut}
        </Typography>
      </Button>
      <Modal
        modalHandler={() => setIsOpen(false)}
        onSubmit={handleLogOut}
        open={isOpen}
        title={t.auth.modal.notification}
      >
        <Typography variant={'regular16'}>
          {t.auth.modal.modalLogOutText.getEmail(email)}
        </Typography>
      </Modal>
    </aside>
  )
}
