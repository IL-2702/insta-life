import { api } from '@/services/api'
import { combineSlices, configureStore } from '@reduxjs/toolkit'

export const rootReducer = combineSlices(api)

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
  reducer: rootReducer,
})
