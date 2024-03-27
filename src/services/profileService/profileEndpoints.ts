import { api } from '@/services/api'
import { Avatar, Profile } from '@/shared/types/profile'

const profileEndpoints = api.injectEndpoints({
  endpoints: builder => ({
    deleteAvatar: builder.mutation<void, void>({
      invalidatesTags: ['Profile'],
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const result = dispatch(
          profileEndpoints.util.updateQueryData('getProfile', undefined, draft => {
            //Optimistic Update delete Avatar
            const imgs = draft.avatars

            if (imgs.length > 0) {
              imgs.length = 0
            }
          })
        )

        try {
          await queryFulfilled
        } catch (e) {
          result.undo()
        }
      },
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
      onQueryStarted: async ({ file }, { dispatch, queryFulfilled }) => {
        const result = dispatch(
          profileEndpoints.util.updateQueryData('getProfile', undefined, draft => {
            //Optimistic Update main Avatar
            const imgs = draft.avatars
            const ava = file.get('file') as File

            if (imgs.length > 0) {
              if (ava) {
                const fileBlob = new Blob([ava], { type: ava.type })

                imgs[0].url = URL.createObjectURL(fileBlob)
              }
            }
          })
        )

        try {
          await queryFulfilled
        } catch (e) {
          result.undo()
        }
      },
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
