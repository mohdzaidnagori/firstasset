'use client'
import React, { useMemo } from 'react'
import { useGetAllUsersQuery } from '../../redux/services/useAdminApi';
import { getToken } from '../../redux/services/LocalStorageServices';
import MaterialReactTable from 'material-react-table';


const Allusers = () => {
    const token = getToken('token')
    const getAllUsersQuery = useGetAllUsersQuery(token);
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
                accessorKey: 'broker.id' || 'N/A',
                header: 'Channel partner',
                size: 100,
            },
            {
                accessorKey: 'brokerfinancial.id' || ' N/A',
                header: 'Financial',
                size: 100,
            },
            {
                accessorKey: 'clientuser.id' || ' N/A',
                header: 'Client',
                size: 100,
            },
            {
                accessorKey: 'clientbroker.id' || ' N/A',
                header: 'Clinet Add channel partner',
                size: 150,
            },
        ],
        [],
    );
    return (
        getAllUsersQuery.isSuccess ? 
        <div className={`md:m-10 my-10 overflow-x-auto`}>
            <div className='md:flex justify-start items-center'>
                <h3 className='text-xl uppercase md:py-5 md:px-5 p-3 font-medium text-center'>all users table</h3>
            </div>
            <MaterialReactTable
                columns={columns}
                data={getAllUsersQuery?.data} />
        </div>
        :
        'data loading'
    )
}

export default Allusers