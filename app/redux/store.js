import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi } from './services/userAuthApi'
import userReducer from '../redux/features/userSlice'
import authReducer from '../redux/features/authSlice'
import otpReducer from '../redux/features/otpSlice'
import { adminAuthApi } from './services/useAdminApi'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [adminAuthApi.reducerPath]: adminAuthApi.reducer,
    user: userReducer,
    auth: authReducer,
    otp: otpReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware).concat(adminAuthApi.middleware),
})

setupListeners(store.dispatch)


