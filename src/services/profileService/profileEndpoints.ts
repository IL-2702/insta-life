import { api } from '@/services/api'
import { Profile } from '@/shared/types/profile'

const profileEndpoints = api.injectEndpoints({
  endpoints: builder => ({
    getProfile: builder.query<Profile, void>({
      query: _ => `users/profile`,
    }),
  }),
})

export const { useGetProfileQuery } = profileEndpoints
