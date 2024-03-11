import { PropsWithChildren, ReactElement } from 'react'

import { AuthLayout } from '@/layouts/publ/AuthLayout'
import { MainLayout } from '@/layouts/publ/MainLayout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const BaseLayout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  const router = useRouter()
  const { pathname } = router

  const isSignInPathname = pathname === '/auth/sign-in'
  const isSignUpPathname = pathname === '/auth/sign-up'

  return (
    <>
      {isSignInPathname || isSignUpPathname ? (
        <AuthLayout>{children}</AuthLayout>
      ) : (
        <MainLayout>{children}</MainLayout>
      )}
    </>
  )
}

export const getBaseLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>
}
