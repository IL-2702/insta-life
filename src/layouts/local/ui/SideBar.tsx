import Link from 'next/link'

import style from './SideBar.module.scss'

const SideBar = () => {
  return (
    <nav className={style.nav}>
      <Link href={'/home'}>Home</Link>
      <Link href={'/profile'}>MyProfile</Link>
      <Link href={'/messenger'}>Messenger</Link>
      <Link href={'/search'}>Search</Link>
      <Link href={'/statistics'}>Statistics</Link>
      <Link href={'/favorites'}>Favorites</Link>
      <Link href={'/auth/sign-in'}>SignIn</Link>
      <Link href={'/auth/sign-up'}>SignUp</Link>
    </nav>
  )
}

export default SideBar
