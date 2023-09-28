"use client"
import React, { useEffect, useState } from 'react'
import { getToken } from '../../redux/services/LocalStorageServices'
import axios from '../../redux/services/axios'
import { MaterialReactTable } from 'material-react-table'
import { localityColumn } from '../../../constants/fractional'
import { useMemo } from 'react'
import Link from 'next/link'
import { toast } from 'react-hot-toast'

const Localities = () => {
    const [Data, setData] = useState([])
    const token = getToken('token')



    const loaclity_view = async () => {
        const url = 'admin/viewlocality';
      
        await axios.get(url)
            .then((response) => {
                setData(response.data.data)
            })
            .catch((error) => {
               console.log(error); 
            })
    }
    useEffect(() => {
        loaclity_view()
    }, [])
    const columns = useMemo(
        () => localityColumn,
        [],
    );
 
    const handleDelete = async (id) => {
        const url = `admin/locality/delete/${id}`
        const config = {
            headers: {
                'Authorization': `Bearer ${token}` // Set the bearer token
            },
        }
        await axios.post(url,{},config)
        .then(response => {
            toast.success(response.data.message);
            loaclity_view()
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className={`md:m-10 my-10 overflow-x-auto`}>
            <div className='md:flex justify-start items-center'>
                <h3 className='text-xl uppercase md:py-5 md:px-5 p-3 font-medium text-center'>Locality Table</h3>
                <div className='flex justify-center items-center mb-2 md:mb-0'>
                    <Link href='/admin/locality/create' className='bg-teal-500 flex justify-center items-center px-6 rounded-full h-[45px] w-auto hover:bg-teal-900 uppercase text-base text-white'>Create Property</Link>
                </div>
            </div>
            <MaterialReactTable
                columns={columns}
                enableRowActions
                renderRowActions={({ row, table }) => (
                    <div className="flex gap-5 justify-center items-center cursor-pointer">
                        <div>
                            <button onClick={() => handleDelete(row.original.id)} className='bg-red-600 p-2 w-[120px] rounded-full text-white'>Delete</button>
                        </div>
                    </div>
                )}

                data={Data} />
        </div>
    )
}

export default Localities