type ApiErrorResultDto = {
  error: string
  messages: [{ field: string; message: string }]
  statusCode: number
}
export type ApiResponse<T> = ApiErrorResultDto | T
