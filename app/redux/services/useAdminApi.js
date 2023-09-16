import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const adminAuthApi = createApi({
    reducerPath: 'adminAuthApi',
    baseQuery: fetchBaseQuery({
      // baseUrl:'https://ec2-54-162-112-39.compute-1.amazonaws.com/dashboard/public/api/user/admin',
      baseUrl:'https://api.firstasset.in/wscubetech/wscubetech/public/user/admin'
        // baseUrl: 'https://www.skilliza.com/wscubetech/public/api/user/admin',
        // baseUrl: 'http://127.0.0.1:8000/api/user/admin',
    }),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: (token) => {
                return {
                  url: 'getalluser',
                  method: 'GET',
                  headers: {
                    'authorization': `Bearer ${token}`,
                  }
                }
              },
        })

    })
})
export const {
    useGetAllUsersQuery
} = adminAuthApi;