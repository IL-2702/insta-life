export type AuthSliceInitialState = {
  accessToken?: string
  email: string
  recaptchaToken: null | string
}

export type SignInParams = {
  email: string
  password: string
}

export type SignUpArgs = {
  baseUrl: string
  email: string
  password: string
  userName: string
}

export type CheckRecoveryArgs = {
  recoveryCode: string
}

export type CheckRecoveryResponse = {
  email: string
}

export type SignUpConfirmationArgs = {
  confirmationCode: string
}

export type SignUpEmailResendingArgs = {
  baseUrl: string
  email: string
}

export type SignInResponse = {
  accessToken?: string
} & Partial<ErrorResponse>

export type OAuthGoogleResponse = {
  accessToken?: string
  email?: string
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
export type NewPasswordParams = {
  newPassword: string
  recoveryCode: string
}

export type OAuthGoogleParams = {
  code: string
}
