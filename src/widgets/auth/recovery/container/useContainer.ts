import { useEffect } from 'react'

import { useCheckRecoveryCodeMutation } from '@/services/authService/authEndpoints'
import { ROUTES } from '@/shared/constants/routes'
import { useRouter } from 'next/router'

export const useContainer = () => {
  const { push, query } = useRouter()

  const [checkRecoveryCode] = useCheckRecoveryCodeMutation()

  useEffect(() => {
    if (query.code) {
      checkRecoveryCode({
        recoveryCode: query.code as string,
      })
        .unwrap()
        .then(res => {
          console.log(res)
          push(ROUTES.CREATE_NEW_PASSWORD)
        })
        .catch(err => {
          console.log(err)
          push(ROUTES.VERIFICATION_LINK_EXPIRED, { query: { email: query.email } })
        })
    }
  }, [query.code])

  return {}
}
