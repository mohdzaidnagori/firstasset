import { createSlice } from '@reduxjs/toolkit';

const otpSlice = createSlice({
  name: 'otp',
  initialState: null,
  reducers: {
    setConfirmationResult: (state, action) => {
      return action.payload;
    },
  },
});

export const { setConfirmationResult } = otpSlice.actions;

export default otpSlice.reducer;