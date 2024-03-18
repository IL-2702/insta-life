import { useLayoutEffect } from 'react'

import { useAppDispatch } from '@/app/store/hooks/useAppDispatch'
import { getBaseLayout } from '@/layouts/publ/BaseLayout/BaseLayout'
import { authActions } from '@/services/authService/store/slice/authEndpoints.slice'
import { useRouter } from 'next/router'

const HomePage = () => {
  const { query } = useRouter()
  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    query.accessToken && dispatch(authActions.setAccessToken(query.accessToken as string))
  }, [query, dispatch])

  return <div>githubPROVIDER</div>
}

HomePage.getLayout = getBaseLayout
export default HomePage
