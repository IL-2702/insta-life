export {}

export type AuthSliceInitialState = {
  accessToken?: string
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
