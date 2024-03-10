import { AuthSliceInitialState } from '@/services/authService/lib/authEndpoints.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: AuthSliceInitialState = {
  accessToken: undefined,
}

export const authSlice = createSlice({
  initialState,
  name: 'authReducer',
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    },
  },
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions
