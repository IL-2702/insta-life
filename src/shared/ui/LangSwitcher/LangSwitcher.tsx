import { SelectComponent } from '@/shared/ui/Select'
import Image from 'next/image'

import s from './LangSwitcher.module.scss'

import GBFlag from '../../../../public/gb-flag.svg'
import RUFlag from '../../../../public/ru-flag.svg'

export const LangSwitcher = () => {
  const languages = [
    {
      icon: <Image alt={'uk flag'} src={GBFlag} />,
      title: 'English',
    },
    {
      icon: <Image alt={'ru flag'} src={RUFlag} />,
      title: 'Russia',
    },
  ]

  return (
    <div className={s.selectWrapper}>
      <SelectComponent fullWidth selectItems={languages}></SelectComponent>
    </div>
  )
}
