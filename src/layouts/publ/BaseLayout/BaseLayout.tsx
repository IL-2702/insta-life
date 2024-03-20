import { PropsWithChildren, ReactElement, useEffect } from 'react'

import { AuthLayout } from '@/layouts/publ/AuthLayout'
import { MainLayout } from '@/layouts/publ/MainLayout'
import { PRIVATE_ROUTES } from '@/shared/constants/routes'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const BaseLayout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  const router = useRouter()
  const { asPath, locale, locales, pathname, push, query } = router

  const isPrivatePassName = !!PRIVATE_ROUTES.find(route => route === pathname)

  useEffect(() => {
    const languageFromLocalStorage = localStorage.getItem('language')

    if (typeof languageFromLocalStorage === 'string' && languageFromLocalStorage !== locale) {
      push({ pathname, query }, asPath, { locale: languageFromLocalStorage as string })
    }
  }, [asPath, locale, locales, pathname, push, query])

  return (
    <>
      {isPrivatePassName ? (
        <MainLayout>{children}</MainLayout>
      ) : (
        <AuthLayout>{children}</AuthLayout>
      )}
    </>
  )
}

export const getBaseLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>
}
