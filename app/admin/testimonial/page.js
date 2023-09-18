"use client"
import React, { useEffect, useState } from 'react'
import { getToken } from '../../redux/services/LocalStorageServices'
import axios from '../../redux/services/axios'
import { MaterialReactTable } from 'material-react-table'
import { tesimonialColumn } from '../../../constants/fractional'
import { useMemo } from 'react'
import Link from 'next/link'
import { BiEdit } from 'react-icons/bi'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

const Testimonial = () => {
    const [Data, setData] = useState([])
    const token = getToken('token')
    const router = useRouter()
    const cancelTokenSource = axios.CancelToken.source();

    const handleUpdatedata = (row) => {
        console.log(row.original)

        const serializedObject = JSON.stringify(row.original);
        const encodedSlug = encodeURIComponent(serializedObject);

        //  Now navigate to the FractionalPage with the encoded slug
        router.push(`admin/sole/${encodedSlug}`);
    }
    const fraction_view = async () => {
        const url = 'admin/testimonial_view';
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
        () => tesimonialColumn,
        [],
    );
    const imagesData = Data.length !== 0 && JSON.parse(Data[0].images)[0]
    console.log(imagesData) 
    const type = 'testimonial';
    const handleView = (row) => {
        router.push(`/project/${row.original.id}/${type}`)
    }
    const handleDelete = async (id) => {
        const url = `admin/testi/delete/${id}`
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
                    <Link href='/admin/testimonial/create' className='bg-teal-500 flex justify-center items-center px-6 rounded-full h-[45px] w-auto hover:bg-teal-900 uppercase text-base text-white'>Create Property</Link>
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

export default Testimonial