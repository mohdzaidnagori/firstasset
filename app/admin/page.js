'use client'
import React, { useMemo } from 'react'
import { useGetAllUsersQuery } from '../redux/services/useAdminApi';
import { getToken } from '../redux/services/LocalStorageServices';
import MaterialReactTable from 'material-react-table';
import { AiOutlineFileSearch } from 'react-icons/ai';


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
                accessorKey: 'user_type',
                header: 'type',
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
                accessorKey: 'locality',
                header: 'Locality',
                size: 100,
            },
            {
                accessorKey: 'address',
                header: 'Address',
                size: 200,
            },
           
        ],
        [],
    );
    return (
        getAllUsersQuery.isSuccess ? 
        <div className={`md:m-10 my-10 overflow-x-auto bg-teal-300 w-screen`}>
            <div className='md:flex justify-start items-center'>
                <h3 className='text-xl uppercase md:py-5 md:px-5 p-3 font-medium text-center'>all users table</h3>
            </div>
            <MaterialReactTable
                columns={columns}
                data={getAllUsersQuery?.data} />
        </div>
        :
        <div className='w-screen h-[80vh] flex items-center justify-center'>
        <div className='flex justify-center items-center gap-4 text-3xl'>
            <AiOutlineFileSearch />
            <h1 className='mt-1 uppercase'>
                Loading...
            </h1>
        </div>
    </div>
    )
}

export default Allusers