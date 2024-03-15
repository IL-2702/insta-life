import { PropsWithChildren, ReactElement } from 'react'

import { AuthLayout } from '@/layouts/publ/AuthLayout'
import { MainLayout } from '@/layouts/publ/MainLayout'
import { PRIVATE_ROUTES } from '@/shared/constants/routes'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const BaseLayout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  const router = useRouter()
  const { pathname } = router

  const isPrivatePassName = !!PRIVATE_ROUTES.find(route => route === pathname)

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
