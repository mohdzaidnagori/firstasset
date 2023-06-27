'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiFillPhone, AiTwotoneMail } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { getToken } from '../../app/redux/services/LocalStorageServices'
import { useGetLoggedUserQuery } from '../../app/redux/services/userAuthApi'

const Alert = () => {
    const [alert, showAlert] = useState(false)
    const token = getToken('token')
    const { data, isSuccess, isLoading } = useGetLoggedUserQuery(token)
   

    useEffect(() => {
        if (isSuccess && !isLoading && data?.data.is_mobile_verified === 1 && data?.data.is_verified === 1) {
            showAlert(false)
            console.log(data.data+"is mobile and email 1")
        }
        if(isSuccess && !isLoading && data?.data.is_mobile_verified === 0 || data?.data.is_verified === 0){
            showAlert(true)
            console.log(data.data+"is mobile and email 0")
        }
    }, [isSuccess, isLoading, data])
    return (
        <>
            { alert &&
                <div className='fixed -right-[200px] top-[50%] hover:right-0 p-4 bg-white shadow-2xl border-y-2 border-l-2 border-gray-500 z-[999] ease-in duration-200'>
                    <div className="absolute w-3 h-3 bg-red-700 rounded-full -top-1 -left-1"></div>
                    <div className='text-2xl flex gap-6 justify-center'>
                        <AiFillPhone className='text-teal-500' />
                        <AiTwotoneMail className='text-teal-500' />
                    </div>
                    <div className='mt-2 pl-2 font-semibold underline'>
                        <Link href='auth/verification'>Please Verify Your Account</Link>
                    </div>
                </div>
            }
        </>
    )
}

export default Alert