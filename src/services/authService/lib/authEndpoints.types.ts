export type AuthSliceInitialState = {
  accessToken?: string
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

export type ErrorResponse = {
  error: string
  messages: [{ field: string; message: string }]
  statusCode: number
}

export type ApiErrorResultDto = {
  error: string
  messages: [{ field: string; message: string }]
  statusCode: number
}

export type ApiResponse<T> = ApiErrorResultDto | T

export type UserType = {
  email: string
  isBlocked: boolean
  userId: number
  userName: string
}

export type GetMeResponse = ErrorResponse | UserType
