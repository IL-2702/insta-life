import { ReactNode } from 'react'

import { StoreProvider } from '@/app/providers/storeProvider'

export const Providers = ({ children }: { children: ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>
}
