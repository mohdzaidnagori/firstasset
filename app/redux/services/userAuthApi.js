import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api/user',
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: 'login',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    logoutUser: builder.mutation({
      query: ({ token }) => {
        return {
          url: 'logout',
          method: 'POST',
          body: {},
          headers: {
            'authorization': `Bearer ${token}`,
          }
        }
      }
    }),
    getLoggedUser: builder.query({
      query: (token) => {
        return {
          url: 'loggeduser',
          method: 'GET',
          headers: {
            'authorization': `Bearer ${token}`,
          }
        }
      }
    }),
    sendPasswordResetEmail: builder.mutation({
      query: (user) => {
        return {
          url: 'send_reset_password_email',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    resetPassword: builder.mutation({
      query: (user) => {
        return {
          url: 'reset-password',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
  })

})
export const { useLoginUserMutation,useGetLoggedUserQuery, useLogoutUserMutation, useSendPasswordResetEmailMutation, useResetPasswordMutation } = userAuthApi