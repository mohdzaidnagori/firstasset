'use client'
import React, { useEffect, useState } from 'react'
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { getToken } from '../services/LocalStorageServices';
import Login from '../../../components/adminLogin/login';
import { useRouter } from 'next/navigation';


const AdminProvider = ({ children }) => {
  const token = getToken('token')
  const router = useRouter()
  const getLoggedUserQuery = useGetLoggedUserQuery(token);
  const isLoggedIn = getLoggedUserQuery.isSuccess && getLoggedUserQuery.data?.data?.is_admin === 1;
  console.log(getLoggedUserQuery.isSuccess)
  // Convert token to a boolean value
  useEffect(() => {
    if (!isLoggedIn) {
      // Replace '/auth/login' with the actual login URL
      if (!getLoggedUserQuery.isLoading && !getLoggedUserQuery.isSuccess && !isLoggedIn) {
        // Replace '/auth/login' with the actual login URL
        router.push('/auth/login');
       
      }
    }
   
  }, [isLoggedIn, router,getLoggedUserQuery.isSuccess,!getLoggedUserQuery.isLoading]);

  // If the user is logged in and is an admin, render the children
  return isLoggedIn ? (
    <div className='bg-gray-100/20'>{children}</div>
  ) : null;
}


export default AdminProvider