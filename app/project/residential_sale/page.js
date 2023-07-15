'use client'
import React, { useEffect } from 'react'
import { useGetLoggedUserQuery } from '../../redux/services/userAuthApi';
import { getToken } from '../../redux/services/LocalStorageServices';
import { useRouter } from 'next/navigation';

const Residential_sale = () => {
    const token = getToken('token')
    const router = useRouter()
    const getLoggedUserQuery = useGetLoggedUserQuery(token);

    useEffect(() => {
        if (getLoggedUserQuery.isError) {
            router.push('/')
        }
    }, [getLoggedUserQuery.isError])
    if (getLoggedUserQuery.isError) {
        return null;
    }
    return (
       <>
       {
        getLoggedUserQuery.isSuccess && 
        <div>Residential_sale</div>
       }
       </>
    )
}

export default Residential_sale