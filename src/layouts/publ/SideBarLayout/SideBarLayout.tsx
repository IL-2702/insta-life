import { PropsWithChildren } from 'react'

import { Header } from '@/layouts/local/ui/Header'
import { SideBar } from '@/layouts/local/ui/SideBar'
import { NextPage } from 'next'

export const SideBarLayout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return (
    <>
      <Header />
      <SideBar />
      <div>{children}</div>
    </>
  )
}
