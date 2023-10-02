"use client"
import React, { useEffect, useState } from 'react'
import { getToken } from '../../redux/services/LocalStorageServices'
import axios from '../../redux/services/axios'
import { MaterialReactTable } from 'material-react-table'
import { fractionalInrestedColumn } from '../../../constants/fractional'
import { useMemo } from 'react'
import Link from 'next/link'
import { BiEdit } from 'react-icons/bi'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

const Fractional_Intrested = () => {
    const [Data, setData] = useState([])
    const token = getToken('token')
    const cancelTokenSource = axios.CancelToken.source();


    const fraction_view = async () => {
        const url = 'admin/fractional_intreseted_view';
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
        () => fractionalInrestedColumn,
        [],
    );
    const type = 'fractional_intrested';
    const handleDelete = async (id) => {
        const url = `admin/fractional/delete/${id}/${type}`
        const config = {
            headers: {
                'Authorization': `Bearer ${token}` // Set the bearer token
            },
        }
        await axios.post(url, {}, config)
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
                <h3 className='text-xl uppercase md:py-5 md:px-5 p-3 font-medium text-center'>Client Interested Fractional
                    Property Table</h3>
            </div>
            <MaterialReactTable
                columns={columns}
                enableRowActions
                renderRowActions={({ row, table }) => (
                    <div className="flex gap-5 justify-center items-center cursor-pointer ">
                        <div>
                            <button onClick={() => handleDelete(row.original.id)} className='bg-red-600 p-2 w-[120px] rounded-full text-white'>Delete</button>
                        </div>
                    </div>
                )}

                data={Data} />
        </div>
    )
}

export default Fractional_Intrested