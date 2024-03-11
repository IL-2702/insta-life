import { ReactNode, useEffect } from 'react'

import { useGetMeQuery } from '@/services/authService/authEndpoints'
import { PRIVATE_ROUTES } from '@/shared/constants/routes'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: me } = useGetMeQuery()
  const pathname = usePathname()
  const { push } = useRouter()

  useEffect(() => {
    if (!me && PRIVATE_ROUTES.find(route => route === pathname)) {
      push('auth/sign-in')
    }
  }, [me, pathname, push])

  return children
}
