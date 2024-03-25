import { PropsWithChildren, useEffect } from 'react'

import { Header } from '@/layouts/local/ui/Header'
import { Container } from '@/shared/ui/Container'
import { NextPage } from 'next'

import s from './AuthLayout.module.scss'
export const AuthLayout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return (
    <>
      <Header />
      <main className={s.main}>
        <Container className={s.container}>{children}</Container>
      </main>
    </>
  )
}
