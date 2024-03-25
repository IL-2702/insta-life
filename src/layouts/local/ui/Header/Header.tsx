import { Bell } from '@/shared/assets/icons/Bell'
import { ROUTES } from '@/shared/constants/routes'
import { Container } from '@/shared/ui/Container'
import { LangSwitcher } from '@/shared/ui/LangSwitcher'
import { Typography } from '@/shared/ui/Typography'
import Link from 'next/link'

import s from './Header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.container}>
        <Link href={ROUTES.HOME}>
          <Typography color={'light'} variant={'h1'}>
            InstaLife
          </Typography>
        </Link>
        <div className={s.wrapper}>
          <button className={s.bellButton}>
            <Bell />
            <Typography as={'span'} className={s.span}>
              3
            </Typography>
          </button>
          <LangSwitcher />
        </div>
      </Container>
    </header>
  )
}
