import { useEffect } from 'react'

import { getBaseLayout } from '@/layouts/publ/BaseLayout/BaseLayout'
import { ROUTES } from '@/shared/constants/routes'
import { Spinner } from '@/shared/ui/Spinner'
import { useRouter } from 'next/router'

const GitHubPage = () => {
  const { push, query } = useRouter()

  useEffect(() => {
    if (query.accessToken) {
      // push(ROUTES.HOME)
    } else {
      // push(ROUTES.LOGIN)
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
