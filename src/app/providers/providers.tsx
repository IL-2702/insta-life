import { ReactNode } from 'react'

import { AuthProvider } from '@/app/providers/authProvider'
import { StoreProvider } from '@/app/providers/storeProvider'
import { GoogleOAuthProvider } from '@react-oauth/google'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <StoreProvider>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_API_KEY!}>
        {children}
      </GoogleOAuthProvider>
    </StoreProvider>
  )
}
