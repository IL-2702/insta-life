import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include' }),
  endpoints: () => ({}),
  reducerPath: 'api',
  tagTypes: ['Me'],
})
