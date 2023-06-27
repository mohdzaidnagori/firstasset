import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: "",
  name: "",
  contact_person:'',
  is_mobile_verified:'',
  is_verified:'',
}

export const userSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.email = action.payload.email
      state.name = action.payload.name
      state.contact_person = action.payload.contact_person
      state.is_mobile_verified = action.payload.is_mobile_verified
      state.is_verified = action.payload.is_verified
    },
    unsetUserInfo: (state, action) => {
      state.email = action.payload.email
      state.name = action.payload.name
      state.contact_person = action.payload.contact_person
      state.is_mobile_verified = action.payload.is_mobile_verified
      state.is_verified = action.payload.is_verified
    },
  },
})

export const { setUserInfo, unsetUserInfo } = userSlice.actions

export default userSlice.reducer