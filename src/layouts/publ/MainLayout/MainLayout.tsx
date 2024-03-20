import { PropsWithChildren } from 'react'

import { AuthProvider } from '@/app/providers/authProvider'
import { Header } from '@/layouts/local/ui/Header'
import { SideBar } from '@/layouts/local/ui/SideBar'
import { NextPage } from 'next'

export const MainLayout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return (
    <AuthProvider>
      <Header />
      <SideBar.widget />
      <div>{children}</div>
    </AuthProvider>
  )
}
