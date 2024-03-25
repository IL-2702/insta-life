import { api } from '@/services/api'
import { Avatar, Profile } from '@/shared/types/profile'

const profileEndpoints = api.injectEndpoints({
  endpoints: builder => ({
    deleteAvatar: builder.mutation<void, void>({
      invalidatesTags: ['Profile'],
      query: () => {
        return {
          method: 'DELETE',
          url: 'users/profile/avatar',
        }
      },
    }),
    getProfile: builder.query<Profile, void>({
      providesTags: ['Profile'],
      query: _ => `users/profile`,
    }),
    uploadAvatar: builder.mutation<Avatar[], { file: FormData }>({
      invalidatesTags: ['Profile'],
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

export const { useDeleteAvatarMutation, useGetProfileQuery, useUploadAvatarMutation } =
  profileEndpoints
