type ApiFieldError = { field: string; message: string }
type ApiErrorResultDto = {
  error: string
  messages: ApiFieldError | string
  statusCode: number
}
export type ApiResponse<T> = ApiErrorResultDto | T
