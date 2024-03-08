import { PropsWithChildren, ReactElement } from 'react'

import { SideBarLayout } from '@/layouts/publ/SideBarLayout/SideBarLayout'
import { NextPage } from 'next'

const BaseLayout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return <SideBarLayout>{children}</SideBarLayout>
}

export const getBaseLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>
}
