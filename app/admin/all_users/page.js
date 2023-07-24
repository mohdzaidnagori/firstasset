'use client'
import React, { useMemo } from 'react'
import { useGetAllUsersQuery } from '../../redux/services/useAdminApi';
import { getToken } from '../../redux/services/LocalStorageServices';
import ReactTable from '../../../components/table/ReactTable';

const Allusers = () => {
    const token = getToken('token')
    const getAllUsersQuery = useGetAllUsersQuery(token);
    console.log(getAllUsersQuery.data)
    const columns = useMemo(
        () => [
            {
                accessorKey: 'name', //access nested data with dot notation
                header: 'First Name',
                size: 100,
            },
            {
                accessorKey: 'email',
                header: 'Email',
                size: 100,
            },
            {
                accessorKey: 'contact_person', //normal accessorKey
                header: 'Contact Person',
                size: 100,
            },
            {
                accessorKey: 'phone_no',
                header: 'Mobile Number',
                size: 100,
            },
            {
                accessorKey: 'broker.id'  || 'N/A',
                header: 'Channel partner',
                size: 100,
            },
            {
                accessorKey: 'brokerfinancial.id'  || ' N/A',
                header: 'Financial',
                size: 100,
            },
            {
                accessorKey: 'clientuser.id'  || ' N/A',
                header: 'Client',
                size: 100,
            },
            {
                accessorKey: 'clientbroker.id'  || ' N/A',
                header: 'Clinet Add channel partner',
                size: 150,
            },
        ],
        [],
    );
    return (
        <div className='relative w-full'>
            {
                getAllUsersQuery.isSuccess ?
                    <ReactTable data={getAllUsersQuery?.data} columns={columns} name='all users table' />
                    :
                    'Data Loading'
            }
        </div>
    )
}

export default Allusers