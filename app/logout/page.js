"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useLogoutUserMutation } from '../redux/services/userAuthApi';
import { getToken,removeToken } from '../redux/services/LocalStorageServices';
import { unsetUserInfo } from '../redux/features/userSlice';
import { useDispatch } from 'react-redux';
import { unsetUserToken } from '../redux/features/authSlice';
import { toast } from 'react-hot-toast';

const Logout = () => {
    const token = getToken('token')
    const [logoutUser] = useLogoutUserMutation()
    const router = useRouter();
    const dispatch = useDispatch()
    useEffect(() => {
        async function fetchData() {
            const res = await logoutUser({ token })
            console.log(res)
            if (res.data.status === "success") {
                removeToken('token')
                dispatch(unsetUserToken({ token: null }))
                dispatch(unsetUserInfo({ email: "", name: "" }))
                toast.success(res.data.message)
                router.push('/')
            }
        }
        fetchData();
    }, [])
    return (
        <div>loading</div>
    )
}

export default Logout