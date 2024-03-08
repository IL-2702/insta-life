import { Bell } from '@/shared/assets/icons/Bell'
import { SelectComponent } from '@/shared/ui/Select'
import { Typography } from '@/shared/ui/Typography'
import Link from 'next/link'

import s from './Header.module.scss'

export const Header = () => {
  const languages = ['🇬🇧 English', '🇷🇺 Russia']

  return (
    <header className={s.header}>
      <Link href={'/home'}>
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
        <SelectComponent fullWidth selectItems={languages}></SelectComponent>
      </div>
    </header>
  )
}
