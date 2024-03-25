import { api } from '@/services/api'
import {
  CheckRecoveryArgs,
  CheckRecoveryResponse,
  ErrorResponse,
  GetMeResponse,
  NewPasswordParams,
  OAuthGoogleParams,
  OAuthGoogleResponse,
  PasswordRecoveryParams,
  PasswordRecoveryResponse,
  SignInParams,
  SignInResponse,
  SignUpArgs,
  SignUpConfirmationArgs,
  SignUpEmailResendingArgs,
} from '@/services/authService/lib/authEndpoints.types'
import { authActions, authSlice } from '@/services/authService/store/slice/authEndpoints.slice'

const authEndpoints = api.injectEndpoints({
  endpoints: builder => ({
    checkRecoveryCode: builder.mutation<CheckRecoveryResponse, CheckRecoveryArgs>({
      query: ({ recoveryCode }) => ({
        body: { recoveryCode },
        method: 'POST',
        url: 'auth/check-recovery-code',
      }),
    }),
    createNewPassword: builder.mutation<any, NewPasswordParams>({
      query: params => {
        return {
          body: params,
          method: 'POST',
          url: 'auth/new-password',
        }
      },
    }),
    getMe: builder.query<GetMeResponse | unknown, void>({
      providesTags: ['Me'],
      async queryFn(_, _api, _extraOptions, baseQuery) {
        const result = await baseQuery({
          method: 'GET',
          mode: 'cors',
          url: `auth/me`,
        })

        return result
      },
    }),
    logOut: builder.mutation<Partial<ErrorResponse>, void>({
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled
          dispatch(authSlice.actions.setAccessToken(''))

          const patchResult = dispatch(
            authEndpoints.util.updateQueryData('getMe', undefined, () => {
              return null
            })
          )
        } catch (e) {
          console.log(e)
        }
      },
      query: () => ({
        method: 'POST',
        url: 'auth/logout',
      }),
    }),
    oAuthGoogle: builder.mutation<OAuthGoogleResponse, OAuthGoogleParams>({
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
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/google/login',
      }),
    }),
    passwordRecovery: builder.mutation<PasswordRecoveryResponse, PasswordRecoveryParams>({
      query: ({ baseUrl, email, recaptcha }) => ({
        body: { baseUrl, email, recaptcha },
        method: 'POST',
        url: 'auth/password-recovery',
      }),
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
        mode: 'cors',
        url: 'auth/login',
      }),
    }),
    signUp: builder.mutation<void, SignUpArgs>({
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/registration',
      }),
    }),
    signUpConfirmation: builder.mutation<void, SignUpConfirmationArgs>({
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/registration-confirmation',
      }),
    }),
    signUpEmailResending: builder.mutation<void, SignUpEmailResendingArgs>({
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/registration-email-resending',
      }),
    }),
  }),
})

export const {
  useCheckRecoveryCodeMutation,
  useCreateNewPasswordMutation,
  useGetMeQuery,
  useLogOutMutation,
  useOAuthGoogleMutation,
  usePasswordRecoveryMutation,
  useSignInMutation,
  useSignUpConfirmationMutation,
  useSignUpEmailResendingMutation,
  useSignUpMutation,
} = authEndpoints
