import { Profile } from '@/shared/types/profile'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: Profile = {
  aboutMe: '',
  avatars: [],
  city: '',
  createdAt: '',
  dateOfBirth: '',
  firstName: '',
  id: null,
  lastName: '',
  userName: '',
}

const profileSlice = createSlice({
  initialState,
  name: 'profileReducer',
  reducers: {
    setUser: (_, action: PayloadAction<Profile>) => action.payload,
  },
})

export const { setUser } = profileSlice.actions
