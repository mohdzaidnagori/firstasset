"use client"
import React, { useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { MdEditNotifications } from 'react-icons/md';
import CommercialRentPropertyForm from '../userForm/CommercialRentPropertyForm';
import { useRouter } from 'next/navigation';
import { BiEdit } from 'react-icons/bi';
import CommercialsalePropertyForm from '../userForm/CommercialsalePropertyForm';
import { useGetLoggedUserQuery, useGetUserPropertyQuery } from '../../app/redux/services/userAuthApi';
import { getToken } from '../../app/redux/services/LocalStorageServices';
import axios from '../../app/redux/services/axios';
import { toast } from 'react-hot-toast';
import ResidentialRentPropertyForm from '../userForm/ResidentialRentPropertyForm';
import ResidentialSalePropertyForm from '../userForm/ResidentialSalePropertyForm';
import Link from 'next/link';

//nested data is ok, see accessorKeys in ColumnDef below


const PropertyTable = ({ data, columns, type, heading,link }) => {
    const router = useRouter()
    const [modal, setModal] = useState(false)
    const [rowData, setRowData] = useState({})
    const token = getToken('token')
    const userProperty = useGetUserPropertyQuery(token)
    const getLoggedUserQuery = useGetLoggedUserQuery(token);
    //should be memoized or stable
    const handledata = (row, table) => {
        setRowData(row.original)
        setModal(true)
    }
    const handleApproved = (row) => {
        const url = `property/${row.original.id}/${type}/isApproved`
        const config = {
            headers: {
                'Authorization':`Bearer ${token}`
            }
        };
        axios.get(url,config)
        .then(response => {
            toast.success(response.data.message)
            userProperty.refetch();
        })
        .catch(error => {
            toast.error(error?.message);
        });
    }
    const handleView = (row) => {
        router.push(`/project/${row.original.id}/${type}`)
    }
    const handleActive = (row) => {
        const url = `property/${row.original.id}/${type}/isActive`
        const config = {
            headers: {
                'Authorization':`Bearer ${token}`
            }
        };
        axios.get(url,config)
        .then(response => {
            toast.success(response.data.message)
            userProperty.refetch();
        })
        .catch(error => {
            toast.error(error?.message);
        });
    }
    
    const formModal = () => {
        if (type === 'c_rents') {
            return <CommercialRentPropertyForm data={rowData} click={() => setModal(false)} />
        }
        if (type === 'c_sales') {
            return <CommercialsalePropertyForm data={rowData} click={() => setModal(false)} />
        }
        if (type === 'r_rents') {
            return <ResidentialRentPropertyForm data={rowData} click={() => setModal(false)} />
        }
        if (type === 'r_sales') {
            return <ResidentialSalePropertyForm data={rowData} click={() => setModal(false)} />
        }
    }
    
    return (
        <>
            {modal && formModal()}
            {!modal &&  <div className={`md:m-10 md:shadow-2xl my-10`}>
                    <div className='md:flex justify-start items-center'>
                    <h3 className='text-xl uppercase md:py-5 md:px-5 p-3 font-medium text-center'>{heading}</h3>
                    <div className='flex justify-center items-center mb-2 md:mb-0'>
                    <Link href={link} className='bg-teal-500 flex justify-center items-center px-6 rounded-full h-[45px] w-auto hover:bg-teal-900 uppercase text-base text-white'>Create Property</Link>
                    </div>
                    </div>
                    <MaterialReactTable
                        columns={columns}
                        enableRowActions
                        renderRowActions={({ row, table }) => (
                            <div className="flex gap-5 justify-center items-center cursor-pointer">

                                <button
                                    className='bg-teal-500 p-2 px-5 rounded-full text-white hover:bg-teal-300'
                                    onClick={() => handledata(row, table)}
                                >
                                    <BiEdit />
                                </button>
                                <div>
                                    <button onClick={() => handleView(row)} className='bg-teal-500 p-2 px-5 rounded-full text-white hover:bg-teal-300'>View</button>
                                </div>
                                <div>
                                    <button onClick={() => handleActive(row)} className={`${row.original.isActive ? 'bg-red-500' : 'bg-green-600'} p-2 w-[120px] rounded-full text-white`}>{row.original.isActive ? 'Disabled' : 'actvate'}</button>
                                </div>
                                <div>
                                    <button disabled={getLoggedUserQuery?.data?.data?.is_admin ? false : true} onClick={() => handleApproved(row)} className={`${!row.original.isApproval ? 'bg-green-500' : 'bg-red-600'} p-2 w-[120px] rounded-full text-white`}>{!row.original.isApproval ? 'Approved' : 'Not Approved'}</button>
                                </div>
                            </div>
                        )}

                        data={data} />
            </div>
}

        </>
    )
};

export default PropertyTable;


