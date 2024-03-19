import { PropsWithChildren, useEffect } from 'react'

import { Header } from '@/layouts/local/ui/Header'
import { NextPage } from 'next'

export const AuthLayout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  )
}
