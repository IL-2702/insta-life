import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { en } from '../../../locales/en'
import { ru } from '../../../locales/ru'

export const useTranslation = () => {
  const { locale } = useRouter()

  const t = locale === 'en' ? en : ru

  useEffect(() => {
    if (locale) {
      localStorage.setItem('language', locale)
    }
  }, [locale])

  return { t }
}
