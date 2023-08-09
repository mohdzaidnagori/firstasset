"use client"
import React, { useEffect, useState } from 'react'
import { getToken } from '../../redux/services/LocalStorageServices'
import axios from '../../redux/services/axios';
import Image from 'next/image';
import { GrClose } from 'react-icons/gr';
import { toast } from 'react-hot-toast';


const ImageView = ({ params }) => {
    const token = getToken('token');
    const [imagesData, setImagesdata] = useState([])
    const [id, type] = params.slug;
    function ViewImages() {
        const url = `property/${id}/${type}/images`;

        const config = {
            headers: {
                'Authorization': `Bearer ${token}` // Set the bearer token
            }
        };

        // Make the POST request
        axios.get(url, config)
            .then(response => {
                setImagesdata(response.data.images);
                console.log(response.data.images)
            })
            .catch(error => {
                console.error(error);
            });
    }
    useEffect(() => {
        if (id) {
            ViewImages()
        }
    }, [id])
    const handleClick = (index) => {
        const url = `deleteImages/${id}/${index}/${type}`;

        const config = {
            headers: {
                'Authorization': `Bearer ${token}` // Set the bearer token
            }
        };
        axios.delete(url, config)
        .then(response => {
            toast.success(response.data.message)
        })
        .catch(error => {
            console.error(error);
        });
        ViewImages()
    }


    return (
        <div className='mx-16 my-8'>
           <div className='py-5 bg-teal-600 my-5 max-w-screen-sm'>
           <h3 className='text-xl uppercase md:px-4 font-medium text-white'>View Image</h3>
           </div>
            <div className='grid place-items-center md:grid-cols-4 grid-cols-1 lg:grid-cols-6 gap-5'>
                {
                    imagesData?.map((item, index) => {
                        return (
                            <div key={index} className='p-2 bg-white shadow-2xl rounded-lg relative'>
                                <div  className='w-[200px] h-[200px] relative  overflow-hidden'>
                                    <Image
                                        src={`http://localhost:8000/images/${item}`}
                                        fill={true}
                                        loading='lazy'
                                        unoptimized={true}
                                        style={{ objectFit: 'fill' }}
                                        alt={`propertImages${index}`} />
                                </div>
                                <div className='absolute top-2 right-2 bg-white p-1 cursor-pointer' onClick={() => handleClick(index)}>
                                    <GrClose />
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ImageView