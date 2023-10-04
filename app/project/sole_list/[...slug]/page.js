"use client"
import Link from 'next/link';
import axios from '../../../../app/redux/services/axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { EffectCreative, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import style from '../../../../components/swiper/homeBanner/Banner.module.css'
import { AiOutlineFileSearch } from 'react-icons/ai';
import IntresetedForm from '../../../../components/userForm/IntresetedForm';
import { MdClose } from 'react-icons/md';

const Propert_list = ({ params }) => {
    const [data, setData] = useState([]);
    const [id, type] = params.slug;
    const [IntrestedData, setIntrestedData] = useState([])
    const [Intrested, setIntrested] = useState(false)
    const [loadings, setLoading] = useState(true)

    useEffect(() => {
        fetchPropertyData();
    }, []);





    const fetchPropertyData = async () => {
        const url = `/admin/sole_view/${id}`
        try {
            const response = await axios.get(url);
            setData(response.data.data);
            setLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false)
        }

    }
    const handleIntrseted = (item) => {
        setIntrestedData(item)
        setIntrested(true)
    }


    const imgArray = data.length !== 0 && JSON.parse(data?.images);
    function createMarkup(data) {
        return { __html: data };
    }
    return (
        <section>
            <div className='py-5'>

                {
                    data.length !== 0 ?
                        <div className="min-w-screen min-h-screen bg-teal-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
                            {
                                <div className={`absolute ${Intrested ? 'top-0' : '-top-[100%] '} left-[50%] translate-x-[-50%] z-[999] w-[80%] h-full border-2 bg-white transition-all duration-300`}>
                                    <div onClick={() => setIntrested(false)} className=" absolute top-10 left-5 bg-white p-1 rounded-full shadow-xl shadow-gray-900/60">
                                        <MdClose className="text-2xl" />
                                    </div>
                                    <div className="h-full">
                                        <IntresetedForm data={IntrestedData} type='sole' click={() => setIntrested(false)} intrested={Intrested} />
                                    </div>
                                </div>
                            }
                            <div className="w-full max-w-8xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                                <div className="md:flex items-center -mx-10">
                                    <div className="realtive  md:w-1/2 px-10 mb-10 md:mb-0">
                                        <div className="relative h-[400px] w-full">
                                            <div className='absolute w-full h-full z-10 rounded-[2rem] overflow-hidden'>
                                                <Swiper
                                                    grabCursor={true}
                                                    effect={'creative'}
                                                    loop={true}
                                                    autoplay={{
                                                        delay: 3000,
                                                        disableOnInteraction: false,
                                                    }}
                                                    creativeEffect={{
                                                        prev: {
                                                            shadow: false,
                                                            translate: [0, 0, -400],
                                                        },
                                                        next: {
                                                            translate: ['100%', '0%', '0%'],
                                                        },
                                                    }}
                                                    modules={[Autoplay]}
                                                    className="mySwiper w-full h-full"
                                                >
                                                    {
                                                        data.length !== 0 && imgArray.map((item) => {
                                                            return <SwiperSlide key={item.id} className={style.swiperSlide}>
                                                                <Image fill={true}
                                                                    sizes='100%'
                                                                    src={`https://skilliza.com/wscubetech/public/images/${item}`}
                                                                    alt='banner images' loading='lazy'
                                                                    style={{ objectFit: 'fill' }} />
                                                            </SwiperSlide>
                                                        })
                                                    }

                                                </Swiper>
                                            </div>
                                            <div className="border-4 border-yellow-200 absolute h-full w-full top-10 bottom-10 left-10 right-10 z-0"></div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 px-10">
                                        <div className="mb-10">
                                            <h1 className="font-bold uppercase text-2xl mb-2">{data?.project_name}</h1>
                                            <h3 className="font-bold uppercase text-lg mb-3">{data?.locality}</h3>
                                            <p className="text-base" dangerouslySetInnerHTML={createMarkup(data?.description)} />
                                        </div>
                                        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 '>


                                            <div className='flex gap-2 items-center justify-start'>
                                                <span>Carpet Area :</span>
                                                <span>{data?.carpet_area}</span>
                                            </div>
                                            <div className='flex gap-2 items-center justify-start'>
                                                <span>No of Floor :</span>
                                                <span>{data?.floor}</span>
                                            </div>
                                            <div className='flex gap-2 items-center justify-start'>
                                                <span>Rera Date :</span>
                                                <span>{data?.rera_date}</span>
                                            </div>
                                            {
                                                data?.rera_number &&
                                                <div className='flex gap-2 items-center justify-start'>
                                                    <span>Rera Number :</span>
                                                    <span>{data?.rera_number}</span>
                                                </div>
                                            }
                                            <div className='flex gap-2 items-center justify-start'>
                                                <span>Price Range :</span>
                                                <span>{data?.price_range}</span>
                                            </div>
                                            <div className='flex gap-2 items-center justify-start'>
                                                <span>No of Units :</span>
                                                <span>{data?.units}</span>
                                            </div>
                                            <div className='flex gap-2 items-center justify-start'>
                                                <span>Configuration :</span>
                                                <span>{data?.configration}</span>
                                            </div>
                                        </div>
                                       <div className='lg:flex gap-2'>
                                       <div className="my-3 lg:my-5">
                                            <button onClick={() => handleIntrseted(data)} className="bg-teal-500 rounded-full sm:p-2 p-1.5 sm:px-16 px-6 text-white">Interested</button>
                                        </div>
                                
                                        <div className="my-3 lg:my-5 bg-teal-500 rounded-full text-center  sm:p-2 p-1.5 sm:px-16 px-6 w-max">
                                            <Link href={data?.location_map} rel="noopener noreferrer" target="_blank" className=" text-white">View Map</Link>
                                        </div>
                                       </div>

                                    </div>
                                </div>
                            </div>
                        </div>





                        :
                        <div className='max-w-screen h-[50vh] flex items-center justify-center'>
                            <div className='flex justify-center items-center gap-4 text-3xl'>
                                <AiOutlineFileSearch />
                                <h1 className='mt-1 uppercase'>

                                    {
                                        loadings ?
                                            'Loading...'
                                            :
                                            'No Record Found'
                                    }
                                </h1>
                            </div>
                        </div>
                }




            </div>
        </section >
    );
}

export default Propert_list