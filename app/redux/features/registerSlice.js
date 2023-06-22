import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null
}

export const registerSlice = createSlice({
  name: 'register_token',
  initialState,
  reducers: {
    setRegisterToken: (state, action) => {
      state.token = action.payload.token
    },
    unsetRegisterToken: (state, action) => {
      state.token = action.payload.token
    },
  },
})

export const { setRegisterToken, unsetRegisterToken } = registerSlice.actions

export default registerSlice.reducer