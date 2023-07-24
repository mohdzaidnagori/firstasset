'use client'
import React, { useEffect } from 'react'
import { useGetLoggedUserQuery, useLogoutAdminMutation } from '../../redux/services/userAuthApi'
import { getToken, removeToken } from '../../redux/services/LocalStorageServices'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const page = () => {
    const token = getToken('token')
    const [logoutAdmin] = useLogoutAdminMutation()
    const getLoggedUserQuery = useGetLoggedUserQuery(token);
    const router  = useRouter()
    useEffect(() => {
        async function fetchData() {
            const res = await logoutAdmin({ token })
            console.log(res.data)
            if (res.data.status === "success") {
                removeToken('token')
                toast.success(res.data.message)
                router.push('/admin');
                getLoggedUserQuery.refetch();
            }
        }
        fetchData();
    }, [])
  return (
    <div>Loading</div>
  )
}

export default page