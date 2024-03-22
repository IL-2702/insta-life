import { PropsWithChildren } from 'react'

import { AuthProvider } from '@/app/providers/authProvider'
import { Header } from '@/layouts/local/ui/Header'
import { SideBar } from '@/layouts/local/ui/SideBar'
import { Container } from '@/shared/ui/Container'
import { NextPage } from 'next'

import s from './MainLayout.module.scss'

export const MainLayout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return (
    <AuthProvider>
      <Header />
      <Container className={s.wrapper}>
        <SideBar.widget />
        <main className={s.main}>{children}</main>
      </Container>
    </AuthProvider>
  )
}
