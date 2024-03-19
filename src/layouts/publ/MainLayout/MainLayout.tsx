import { PropsWithChildren, useEffect } from 'react'

import { useAppSelector } from '@/app/store/hooks/useAppSelector'
import { Header } from '@/layouts/local/ui/Header'
import { SideBar } from '@/layouts/local/ui/SideBar'
import { ROUTES } from '@/shared/constants/routes'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

export const MainLayout: NextPage<PropsWithChildren> = props => {
  const { children } = props
  const { push } = useRouter()

  const token = useAppSelector(state => state.authReducer.accessToken)

  useEffect(() => {
    if (!token) {
      void push(ROUTES.LOGIN)
    }
  }, [token])

  if (!token) {
    return null
  }

  return (
    <>
      <Header />
      <SideBar.widget />
      <div>{children}</div>
    </>
  )
}
