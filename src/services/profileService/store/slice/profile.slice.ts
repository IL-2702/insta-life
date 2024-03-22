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

export const profileSlice = createSlice({
  initialState,
  name: 'profileReducer',
  reducers: {
    setProfile: (_, action: PayloadAction<Profile>) => action.payload,
  },
})

export const { setProfile } = profileSlice.actions
