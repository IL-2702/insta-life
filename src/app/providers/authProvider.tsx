import { ReactNode, useEffect, useState } from 'react'

import { useGetMeQuery } from '@/services/authService/authEndpoints'
import { PRIVATE_ROUTES, ROUTES } from '@/shared/constants/routes'
import useSafePush from '@/shared/hooks/useSafePush'
import { usePathname } from 'next/navigation'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { data: me, isLoading: isLoadingMe } = useGetMeQuery()
  const pathname = usePathname()
  const { safePush } = useSafePush()
  const isPrivateRoute = !!PRIVATE_ROUTES.find(route => route === pathname)

  useEffect(() => {
    if (isLoadingMe) {
      setIsLoading(true)
    } else {
      if (!me && isPrivateRoute) {
        safePush(ROUTES.LOGIN)
        console.log('push LOGIN')
        setIsLoading(false)
      } else {
        setIsLoading(false)
      }
    }
  }, [safePush, isLoadingMe, isPrivateRoute, me, setIsLoading])

  if ((!me && isPrivateRoute) || isLoading) {
    return null
  }

  return children
}
