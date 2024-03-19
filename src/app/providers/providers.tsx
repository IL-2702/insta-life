import { ReactNode } from 'react'

// import { AuthProvider } from '@/app/providers/authProvider'
import { StoreProvider } from '@/app/providers/storeProvider'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <StoreProvider>
      {/*<AuthProvider>{children}</AuthProvider>*/}
      {children}
    </StoreProvider>
  )
}
