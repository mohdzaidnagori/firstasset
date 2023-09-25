"use client"
import Link from 'next/link'
import React from 'react'
import { getToken } from '../../app/redux/services/LocalStorageServices'
import { useGetLoggedUserQuery } from '../../app/redux/services/userAuthApi'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

const PropertListnavbar = () => {
    const token = getToken('token')
    const router = useRouter()
    const getLoggedUserQuery = useGetLoggedUserQuery(token);
    const client = getLoggedUserQuery.isSuccess && (getLoggedUserQuery?.data?.data.clientbroker !== null || getLoggedUserQuery?.data?.data.clientuser !== null)

    const routeHandle = () => {
        if(client){
            router.push('/project/property_list')
        }
        else{
            toast.error('only client can add Property')
        }
       
    }
    return (
        <>
            {
                // client && 
                <div className='w-full bg-white  py-6 md:flex text-center justify-between items-center'>
                    <p className='font-semibold uppercase'></p>
                    <div className='mt-6 md:mt-0 lg:mr-40'>
                        <button onClick={routeHandle} className="mt-3 text-base font-semibold bg-blue-500 rounded-full text-white hover:bg-teal-300 px-6 py-3">Add Your Property</button>
                    </div>
                </div>
            }
        </>
    )
}

export default PropertListnavbar