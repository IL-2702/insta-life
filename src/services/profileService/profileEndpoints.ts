import { api } from '@/services/api'
import { Avatar, Profile } from '@/shared/types/profile'

const profileEndpoints = api.injectEndpoints({
  endpoints: builder => ({
    getProfile: builder.query<Profile, void>({
      query: _ => `users/profile`,
    }),
    uploadAvatar: builder.mutation<Avatar[], { file: FormData }>({
      query: ({ file }) => {
        return {
          FormData,
          body: file,
          method: 'POST',
          url: 'users/profile/avatar',
        }
      },
    }),
  }),
})

export const { useGetProfileQuery, useUploadAvatarMutation } = profileEndpoints
