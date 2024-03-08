import { PropsWithChildren } from 'react'

import { SideBar } from '@/layouts/local/ui/SideBar'
import { NextPage } from 'next'

export const SideBarLayout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return (
    <>
      <SideBar />
      <div>{children}</div>
    </>
  )
}
