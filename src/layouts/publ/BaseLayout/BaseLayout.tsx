import { PropsWithChildren, ReactElement } from 'react'

import { NextPage } from 'next'

import { MainLayout } from '../MainLayout/MainLayout'

export const BaseLayout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return <MainLayout>{children}</MainLayout>
}

export const getBaseLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>
}
