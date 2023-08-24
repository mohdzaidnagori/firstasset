"use client"
import React, { useEffect, useState } from 'react'
import { getToken, storeToken } from '../../redux/services/LocalStorageServices'
import axios from '../../redux/services/axios'
import { MaterialReactTable } from 'material-react-table'
import { fractionalColumn } from '../../../constants/fractional'
import { useMemo } from 'react'
import Link from 'next/link'
import { BiEdit } from 'react-icons/bi'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

const Fractional = () => {
    const [Data, setData] = useState([])
    const token = getToken('token')
    const router = useRouter()
    const cancelTokenSource = axios.CancelToken.source();

    const handleUpdatedata = (row) => {
        storeToken(JSON.stringify(row.original), 'fractional_update')
        router.push(`admin/fractional/${row.original.id}`);

    }
    const fraction_view = async () => {
        const url = 'admin/fractional_view';
        const config = {
            headers: {
                'Authorization': `Bearer ${token}` // Set the bearer token
            },
            cancelToken: cancelTokenSource.token
        };
        await axios.get(url, config)
            .then((response) => {
                setData(response.data.data)
            })
            .catch((error) => {
                if (axios.isCancel(error)) {
                    console.log('Request canceled');
                } else {
                    console.log(error);
                }
            })
    }
    useEffect(() => {
        fraction_view()
        return () => {
            cancelTokenSource.cancel(); // Cancel the request
        };
    }, [])
    const columns = useMemo(
        () => fractionalColumn,
        [],
    );
    const type = 'fractional';
    const handleView = (row) => {
        router.push(`/project/${row.original.id}/${type}`)
    }
    const handleDelete = async (id) => {
        const url = `admin/fractional/delete/${id}/${type}`
        const config = {
            headers: {
                'Authorization': `Bearer ${token}` // Set the bearer token
            },
        }
        await axios.post(url,{},config)
        .then(response => {
            toast.success(response.data.message);
            fraction_view();
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className={`md:m-10 my-10 overflow-x-auto`}>
            <div className='md:flex justify-start items-center'>
                <h3 className='text-xl uppercase md:py-5 md:px-5 p-3 font-medium text-center'>Fractional Table</h3>
                <div className='flex justify-center items-center mb-2 md:mb-0'>
                    <Link href='/admin/fractional/create' className='bg-teal-500 flex justify-center items-center px-6 rounded-full h-[45px] w-auto hover:bg-teal-900 uppercase text-base text-white'>Create Property</Link>
                </div>
            </div>
            <MaterialReactTable
                columns={columns}
                enableRowActions
                renderRowActions={({ row, table }) => (
                    <div className="flex gap-5 justify-center items-center cursor-pointer">

                        <button
                            className='bg-teal-500 p-2 px-5 rounded-full text-white hover:bg-teal-300'
                            onClick={() => handleUpdatedata(row, table)}
                        >
                            <BiEdit />
                        </button>
                        <div>
                            <button onClick={() => handleView(row)} className='bg-teal-500 p-2 px-5 rounded-full text-white hover:bg-teal-300'>View</button>
                        </div>
                        <div>
                            <button onClick={() => handleDelete(row.original.id)} className='bg-red-600 p-2 w-[120px] rounded-full text-white'>Delete</button>
                        </div>
                    </div>
                )}

                data={Data} />
        </div>
    )
}

export default Fractional