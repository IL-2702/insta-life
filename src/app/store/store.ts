import { api } from '@/services/api'
import { authSlice } from '@/services/authService/store/slice/authEndpoints.slice'
import { combineSlices, configureStore } from '@reduxjs/toolkit'

export const rootReducer = combineSlices(api, authSlice)

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
  reducer: rootReducer,
})
