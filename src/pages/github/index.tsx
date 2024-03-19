import { useEffect } from 'react'

import { useAppDispatch } from '@/app/store/hooks/useAppDispatch'
import { getBaseLayout } from '@/layouts/publ/BaseLayout/BaseLayout'
import { useLazyGetMeQuery } from '@/services/authService/authEndpoints'
import { authActions } from '@/services/authService/store/slice/authEndpoints.slice'
import { ROUTES } from '@/shared/constants/routes'
import { Button } from '@/shared/ui/Button'
import { Spinner } from '@/shared/ui/Spinner'
import { useRouter } from 'next/router'

const GitHubPage = () => {
  const { push, query } = useRouter()
  const dispatch = useAppDispatch()

  const [getMe] = useLazyGetMeQuery()

  useEffect(() => {
    if (query.accessToken) {
      dispatch(authActions.setAccessToken(query.accessToken as string))
      // push(ROUTES.HOME)
    } else {
      // push(ROUTES.LOGIN)
    }
  }, [query.accessToken])

  if (!query.accessToken) {
    return null
  }

  return (
    <div>
      <Spinner />
      <Button onClick={() => getMe()}>getME</Button>
    </div>
  )
}

GitHubPage.getLayout = getBaseLayout
export default GitHubPage
