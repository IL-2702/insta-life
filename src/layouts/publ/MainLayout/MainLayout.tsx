import { PropsWithChildren } from 'react'

import { AuthProvider } from '@/app/providers/authProvider'
import { Header } from '@/layouts/local/ui/Header'
import { SideBar } from '@/layouts/local/ui/SideBar'
import { Container } from '@/shared/ui/Container'
import { Wrapper } from '@/shared/ui/Wrapper'
import { NextPage } from 'next'

import s from './MainLayout.module.scss'

export const MainLayout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  if (
    process.env.NODE_ENV === 'development' &&
    process.env.NEXT_PUBLIC_INTERNET_CONNECTION === 'false'
  ) {
    return (
      <>
        <Header />
        <Container className={s.wrapper}>
          <SideBar.widget />
          <main className={s.main}>{children}</main>
        </Container>
      </>
    )
  }

  return (
    <AuthProvider>
      <Wrapper>
        <Header />
        <Container className={s.wrapper}>
          <SideBar.widget />
          <main className={s.main}>{children}</main>
        </Container>
      </Wrapper>
    </AuthProvider>
  )
}
