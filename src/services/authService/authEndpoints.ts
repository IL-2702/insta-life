import { api } from '@/services/api'
import {
  GetMeResponse,
  SignInParams,
  SignInResponse,
} from '@/services/authService/lib/authEndpoints.types'
import { authActions } from '@/services/authService/store/slice/authEndpoints.slice'

const authEndpoints = api.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<GetMeResponse | unknown, void>({
      providesTags: ['Me'],
      async queryFn(_, _api, _extraOptions, baseQuery) {
        const result = await baseQuery({
          method: 'GET',
          url: `auth/me`,
        })

        return result
      },
    }),
    signIn: builder.mutation<SignInResponse, SignInParams>({
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const {
            data: { accessToken },
          } = await queryFulfilled

          if (accessToken) {
            dispatch(authActions.setAccessToken(accessToken))
            setTimeout(() => {
              dispatch(api.util.invalidateTags(['Me']))
            }, 50)
          }
        } catch (e) {
          console.log(e)
        }
      },
      query: args => ({
        body: args,
        method: 'POST',
        url: 'auth/login',
      }),
    }),
  }),
})

export const { useGetMeQuery, useSignInMutation } = authEndpoints
