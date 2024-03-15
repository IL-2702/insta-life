import { ChangeEvent, ReactElement } from 'react'

import { SelectComponent } from '@/shared/ui/Select'
import Image from 'next/image'
import { useRouter } from 'next/router'

import s from './LangSwitcher.module.scss'

import GBFlag from '../../../../public/gb-flag.svg'
import RUFlag from '../../../../public/ru-flag.svg'

export const LangSwitcher = () => {
  const { asPath, locale, locales, pathname, push, query } = useRouter()

  const changeLangHandler = (title: string) => {
    const locale = title === 'English' ? 'en' : 'ru'

    push({ pathname, query }, asPath, { locale })
  }

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
      <SelectComponent
        fullWidth
        onValueChange={changeLangHandler}
        selectItems={languages}
      ></SelectComponent>
    </div>
  )
}
