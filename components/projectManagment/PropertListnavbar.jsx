"use client"
import Link from 'next/link'
import React from 'react'
import { getToken } from '../../app/redux/services/LocalStorageServices'
import { useGetLoggedUserQuery } from '../../app/redux/services/userAuthApi'

const PropertListnavbar = () => {
    const token = getToken('token')
    const getLoggedUserQuery = useGetLoggedUserQuery(token);
    const client = getLoggedUserQuery.isSuccess && (getLoggedUserQuery?.data?.data.clientbroker !== null || getLoggedUserQuery?.data?.data.clientuser !== null)
    return (
        <>
            {
                client && 
                <div className='w-full  py-6 md:flex text-center justify-evenly items-center border-b border-gray-300'>
                    <p className='font-semibold uppercase'>We Can Add Property</p>
                    <div className='mt-6 md:mt-0'>
                        <Link href="/project/property_list" className="mt-3 hover:border-y-2 hover:text-teal-500 md:hover:border-teal-500 border-y-2 border-transparent  text-gray-700 px-4 py-2">Property List</Link>
                    </div>
                </div>
            }
        </>
    )
}

export default PropertListnavbar