export {}

export type AuthSliceInitialState = {
  accessToken?: string
  email: string
  recaptchaToken: null | string
}

export type SignInParams = {
  email: string
  password: string
}
export type SignInResponse = {
  accessToken?: string
} & Partial<ErrorResponse>

export type ErrorResponse = {
  error: string
  messages: [{ field: string; message: string }]
  statusCode: number
}

export type UserType = {
  email: string
  isBlocked: boolean
  userId: number
  userName: string
}

export type GetMeResponse = ErrorResponse | UserType

export type PasswordRecoveryResponse = Partial<ErrorResponse>

export type PasswordRecoveryParams = {
  baseUrl: string
  email: string
  recaptcha: string
}
