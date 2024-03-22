import { useEffect } from 'react'

import { useAppDispatch } from '@/app/store/hooks/useAppDispatch'
import { useAppSelector } from '@/app/store/hooks/useAppSelector'
import { useGetProfileQuery } from '@/services/profileService/profileEndpoints'
import { setProfile } from '@/services/profileService/store/slice/profile.slice'

export const useContainer = () => {
  const { data } = useGetProfileQuery()
  const dispatch = useAppDispatch()
  const avatars = useAppSelector(state => state.profileReducer.avatars)
  const userName = useAppSelector(state => state.profileReducer.userName)
  const aboutMe = useAppSelector(state => state.profileReducer.aboutMe)

  useEffect(() => {
    if (data) {
      dispatch(setProfile(data))
    }
  }, [data, dispatch])

  return { aboutMe, avatars, userName }
}
