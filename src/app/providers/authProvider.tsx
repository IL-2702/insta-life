import { ReactNode, useEffect, useState } from 'react'

import { useAppSelector } from '@/app/store/hooks/useAppSelector'
import { useGetMeQuery } from '@/services/authService/authEndpoints'
import { PRIVATE_ROUTES, ROUTES } from '@/shared/constants/routes'
import useSafePush from '@/shared/hooks/useSafePush'
import { Spinner } from '@/shared/ui/Spinner'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { data: me, isLoading: isLoadingMe } = useGetMeQuery()
  const pathname = usePathname()
  const token = useAppSelector(state => state.authReducer.accessToken)
  const { isReady, push } = useRouter()
  const isPrivateRoute = !!PRIVATE_ROUTES.find(route => route === pathname)

  useEffect(() => {
    if (!isReady) {
      return
    }
    if (isLoadingMe) {
      setIsLoading(true)
    } else {
      if (!me && isPrivateRoute) {
        !token &&
          push(ROUTES.LOGIN).then(() => {
            setIsLoading(false)
          })
      }
      setIsLoading(false)
    }
  }, [push, isLoadingMe, isPrivateRoute, me, setIsLoading, token, isReady])

  if (!me && isPrivateRoute) {
    return null
  }

  if (isLoading) {
    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
        }}
      >
        <Spinner />
      </div>
    )
  }

  return children
}
