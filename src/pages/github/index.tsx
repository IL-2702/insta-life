import { useEffect, useLayoutEffect } from 'react'

import { useAppDispatch } from '@/app/store/hooks/useAppDispatch'
import { useAppSelector } from '@/app/store/hooks/useAppSelector'
import { getBaseLayout } from '@/layouts/publ/BaseLayout/BaseLayout'
import { authActions } from '@/services/authService/store/slice/authEndpoints.slice'
import { Spinner } from '@/shared/ui/Spinner'
import { useRouter } from 'next/router'

const GithubPage = () => {
  const { query } = useRouter()
  const dispatch = useAppDispatch()

  const { accessToken } = query

  const token = useAppSelector(state => state.authReducer.accessToken)

  useLayoutEffect(() => {
    if (accessToken) {
      dispatch(authActions.setAccessToken(accessToken as string))
    }
    console.log('token: ', token)
  }, [accessToken])

  return (
    <div>
      <Spinner />
    </div>
  )
}

GithubPage.getLayout = getBaseLayout
export default GithubPage
