import { ReactNode, useEffect, useState } from 'react'

import { useAppSelector } from '@/app/store/hooks/useAppSelector'
import { useGetMeQuery } from '@/services/authService/authEndpoints'
import { PRIVATE_ROUTES } from '@/shared/constants/routes'
import { Spinner } from '@/shared/ui/Spinner'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true)
  const token = useAppSelector(state => state.authReducer?.accessToken)
  const { isLoading: isLoadingMe } = useGetMeQuery()
  const pathname = usePathname()
  const { push } = useRouter()

  const isPrivateRoute = PRIVATE_ROUTES.find(route => route === pathname)

  useEffect(() => {
    if (isLoadingMe) {
      setIsLoading(true)
    } else {
      if (!token && isPrivateRoute) {
        push('auth/sign-in').then(() => setIsLoading(false))
      } else {
        setIsLoading(false)
      }
    }
  }, [token, push, pathname, isLoadingMe, isPrivateRoute])

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
