import { ReactNode, useEffect, useState } from 'react'

import { useGetMeQuery } from '@/services/authService/authEndpoints'
import { PRIVATE_ROUTES, ROUTES } from '@/shared/constants/routes'
import { Spinner } from '@/shared/ui/Spinner'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true)
  const { data: me, isLoading: isLoadingMe } = useGetMeQuery()
  const pathname = usePathname()
  const { push } = useRouter()

  const isPrivateRoute = !!PRIVATE_ROUTES.find(route => route === pathname)

  useEffect(() => {
    if (isLoadingMe) {
      setIsLoading(true)
    } else {
      if (!me && isPrivateRoute) {
        push(ROUTES.LOGIN).then(() => setIsLoading(false))
      } else {
        setIsLoading(false)
      }
    }
  }, [push, isLoadingMe, isPrivateRoute, me])

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

  if (!me && isPrivateRoute) {
    return null
  }

  return children
}
