import { PropsWithChildren } from 'react'

import SideBar from '@/layouts/local/ui/SideBar'
import { NextPage } from 'next'

export const MainLayout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return (
    <div>
      <SideBar />
      <div>{children}</div>
    </div>
  )
}
