"use client"
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { getToken } from '../../../redux/services/LocalStorageServices';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineFileSearch } from 'react-icons/ai';

const Myproperty = () => {
    const [productdata, setProductData] = useState([])
    const [loading, setLoading] = useState(true)
    const token = getToken('token')
    const config = {
        headers: {
            'Authorization': `Bearer ${token}` // Set the bearer token
        }
    };
    useEffect(() => {
        axios.get(`property/myproperty`, config)
            .then(response => {  
                const responses = response.data.data
                const products = responses?.commercial_rents?.concat(responses?.commercial_sales, responses?.residential_rents, responses?.residential_sales);
                setProductData(products)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            });
    }, [])




    function formatNumber(value) {
        if (value >= 10000000) { // If value is in crore
            const croreValue = (value / 10000000).toFixed(1).replace(/\.00$/, '');
            return `${croreValue} Cr`;
        } else if (value >= 100000) { // If value is in lacs
            const lacValue = (value / 100000).toFixed(2).replace(/\.00$/, '');
            return `${lacValue} lac`;
        } else if (value >= 1000) { // If value is in thousands
            const thousandValue = (value / 1000).toFixed(2).replace(/\.00$/, '');
            return `${thousandValue} K`;
        } else { // If value is less than thousands
            return value.toString();
        }
    }


    return (
        <>
            {
                productdata?.length !== 0
                    ?
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
                            <h2 className="uppercase text-black font-semibold text-lg mb-4">Property List</h2>

                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                {productdata.map((product,index) => (
                                    <div key={index} className="group relative">
                                        <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                            <Image
                                                src={`https://skilliza.com/wscubetech/public/images/${JSON.parse(product.images)[0]}`}
                                                alt={`product${product.id}`}
                                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                                                width={500}
                                                height={500}
                                                loading='lazy'
                                                style={{ objectFit: 'cover' }}

                                            />
                                        </div>
                                        {
                                            (product.isApproval == 0 || product.isActive == 0) ?
                                                <div className='absolute top-2 right-3 bg-red-700 px-6 py-1 text-white rounded-md'>Not Approved</div>
                                                :
                                                <div className='absolute top-2 right-3 bg-green-700 px-6 py-1 text-white rounded-md'>Approved</div>

                                        }
                                        <div className='flex justify-between items-center my-4'>
                                            <h3 className=" text-sm text-gray-700 uppercase">{product.property_name}</h3>
                                            <p className=" text-sm text-gray-700 uppercase">Price <span className='text-base font-medium text-gray-900'>{formatNumber(product.expected_price)}</span></p>
                                        </div>
                                        {/* <Link className='bg-teal-500 px-6 py-2 rounded text-black hover:bg-teal-900 hover:text-white' href={`/project/property/${product.id}/${type}`}>Show More</Link> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    : <div className='max-w-screen h-[50vh] flex items-center justify-center'>
                        <div className='flex justify-center items-center gap-4 text-3xl'>
                            <AiOutlineFileSearch />
                            <h1 className='mt-1 uppercase'>

                                {
                                    loading ?
                                        'Loading...'
                                        :
                                        'No Record Found'
                                }
                            </h1>
                        </div>
                    </div>
            }
        </>
    )
}

export default Myproperty;
