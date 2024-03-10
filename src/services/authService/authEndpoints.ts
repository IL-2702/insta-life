import { api } from '@/services/api'
import { SignInParams, SignInResponse } from '@/services/authService/lib/authEndpoints.types'
import { authActions } from '@/services/authService/store/slice/authEndpoints.slice'

const authEndpoints = api.injectEndpoints({
  endpoints: builder => ({
    signIn: builder.mutation<SignInResponse, SignInParams>({
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const {
            data: { accessToken },
          } = await queryFulfilled

          if (accessToken) {
            dispatch(authActions.setAccessToken(accessToken))
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

export const { useSignInMutation } = authEndpoints
