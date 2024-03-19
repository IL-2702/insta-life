import { useEffect } from 'react'

import { useAppDispatch } from '@/app/store/hooks/useAppDispatch'
import { getBaseLayout } from '@/layouts/publ/BaseLayout/BaseLayout'
import { authActions } from '@/services/authService/store/slice/authEndpoints.slice'
import { ROUTES } from '@/shared/constants/routes'
import { Spinner } from '@/shared/ui/Spinner'
import { useRouter } from 'next/router'

const GitHubPage = () => {
  const { push, query } = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (query.accessToken) {
      dispatch(authActions.setAccessToken(query.accessToken as string))
      push(ROUTES.HOME)
    } else {
      push(ROUTES.LOGIN)
    }
  }, [query.accessToken])

  return (
    <div>
      <Spinner />
    </div>
  )
}

GitHubPage.getLayout = getBaseLayout
export default GitHubPage
