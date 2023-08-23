"use client"
import Link from 'next/link';
import axios from '../../../redux/services/axios';
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

const Property_list = ({ params }) => {
    const [data, setData] = useState([]);
    const [id, type] = params.slug;
    const [IntrestedData, setIntrestedData] = useState([])
    const [Intrested, setIntrested] = useState(false)

    useEffect(() => {
        fetchPropertyData();
    }, []);





    const fetchPropertyData = async () => {
        // navigator.geolocation.getCurrentPosition(
        //     (position) => {
        const url = `/property_view/${id}/${type}`
        try {
            const response = await axios.get(url);
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }
    const handleIntrseted = (item) => {
        setIntrestedData(item)
        setIntrested(true)
    }


    function createMarkup(datas) {
        return { __html: datas };
    }

    const imgArray = data.length !== 0 && JSON.parse(data?.images);
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
                                            <div className='absolute w-full h-full z-10'>
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
                                                        imgArray.map((item) => {
                                                            return <SwiperSlide key={data.id} className={style.swiperSlide}>
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
                                            <h1 className="font-bold uppercase text-2xl mb-2">{data.property_name}</h1>
                                            <h3 className="font-bold uppercase text-lg mb-3">{data.locality}</h3>
                                            <p className="text-base" dangerouslySetInnerHTML={createMarkup(data?.description)} />
                                        </div>
                                        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 '>
                                            {
                                                data.maintenance_charge &&
                                                <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                    <span>Maintenance Charge :</span>
                                                    <span>{data.maintenance_charge}</span>
                                                </div>
                                            }

                                            {data.expected_monthly_rent &&
                                                <div className='flex gap-2 items-center justify-start'>
                                                    <span>E Monthly Rent :</span>
                                                    <span>{data.expected_monthly_rent}</span>
                                                </div>
                                            }
                                            <div className='flex gap-2 items-center justify-start'>
                                                <span>Furnished :</span>
                                                <span>{data.furnished_status}</span>
                                            </div>
                                            {
                                                data.security_amount &&
                                                <div className='flex gap-2 items-center justify-start'>
                                                    <span>Security Amount :</span>
                                                    <span>{data.security_amount}</span>
                                                </div>
                                            }
                                            <div className='flex gap-2 items-center justify-start'>
                                                <span>Type :</span>
                                                <span>{data.type}</span>
                                            </div>
                                            <div className='flex gap-2 items-center justify-start'>
                                                <span>Bedroom :</span>
                                                <span>{data.floor_number}</span>
                                            </div>

                                            <div className='flex gap-2 items-center justify-start'>
                                                <span>Parking :</span>
                                                <span>{data.total_floor}</span>
                                            </div>
                                            <div className='flex gap-2 items-center justify-start'>
                                                <span>Washrooms :</span>
                                                <span>{data.washrooms}</span>
                                            </div>
                                            {
                                                data.Bedroom &&
                                                <>
                                                    <div className='flex gap-2 items-center justify-start'>
                                                        <span>Bedroom :</span>
                                                        <span>{data.Bedroom}</span>
                                                    </div>
                                                    <div className='flex gap-2 items-center justify-start'>
                                                        <span>Bathrooms :</span>
                                                        <span>{data.Bathrooms}</span>
                                                    </div>
                                                    <div className='flex gap-2 items-center justify-start'>
                                                        <span>Balconies :</span>
                                                        <span>{data.Balconies}</span>
                                                    </div>
                                                </>

                                            }

                                            <div className='flex gap-2 items-center justify-start'>
                                                <span>Pantry Cafetaria :</span>
                                                <span>{data.pantry_cafeteria ? 'Yes' : 'No'}</span>
                                            </div>

                                            {
                                                data.carpet_area ?
                                                    <>
                                                        <div className='flex gap-2 items-center justify-start'>
                                                            <span>Carpet Area :</span>
                                                            <span>{data.carpet_area} sqft</span>
                                                        </div>
                                                        <div className='flex gap-2 items-center justify-start'>
                                                            <span>Super Area :</span>
                                                            <span>{data.super_area} sqft</span>
                                                        </div>
                                                    </>
                                                    :
                                                    <>
                                                        <div className='flex gap-2 items-center justify-start'>
                                                            <span>Carpet Area :</span>
                                                            <span>{data.carpet_area_sqft} sqft</span>
                                                        </div>
                                                        <div className='flex gap-2 items-center justify-start'>
                                                            <span>Super Area :</span>
                                                            <span>{data.super_area_sqft} sqft</span>
                                                        </div>
                                                    </>
                                            }
                                            {
                                                data.who_are_bachlelor &&
                                                <>
                                                    <div className='flex gap-2 items-center justify-start'>
                                                        <span>Who are Bachlelor :</span>
                                                        <span>{data.who_are_bachlelor ? 'Yes' : 'No'}</span>
                                                    </div>
                                                    <div className='flex gap-2 items-center justify-start'>
                                                        <span>Who eat non veg :</span>
                                                        <span>{data.who_eat_non_veg ? 'Yes' : 'No'}</span>
                                                    </div>
                                                    <div className='flex gap-2 items-center justify-start'>
                                                        <span>With Pets :</span>
                                                        <span>{data.with_pets ? 'Yes' : 'No'}</span>
                                                    </div>
                                                </>
                                            }
                                            {

                                                data.availability_date ?
                                                    <div className='flex gap-2 items-center justify-start'>
                                                        <span>Available Date :</span>
                                                        <span>{data.availability_date}</span>
                                                    </div>
                                                    :
                                                    <div className='flex gap-2 items-center justify-start'>
                                                        <span>Available Date :</span>
                                                        <span>{data.available_from}</span>
                                                    </div>

                                            }
                                            {
                                                data.expected_sale_price &&
                                                <div className='flex gap-2 items-center justify-start'>
                                                    <span>Expected sale price :</span>
                                                    <span>{data.expected_sale_price}</span>
                                                </div>
                                            }
                                            {
                                                data.possession_status &&
                                                <div className='flex gap-2 items-center justify-start'>
                                                    <span>Possession Status :</span>
                                                    <span>{data.possession_status}</span>
                                                </div>

                                            }
                                            {
                                                data.age_of_construction &&
                                                <div className='flex gap-2 items-center justify-start'>
                                                    <span>Age Of Construction :</span>
                                                    <span>{data.age_of_construction}</span>
                                                </div>
                                            }
                                            <div className='flex gap-2 items-center justify-start'>
                                                {
                                                    data.currently_rented_out ?
                                                        <>
                                                            <span>Currently Rent Out :</span>
                                                            <span>{data.currently_rented_out ? 'Yes' : 'No'}</span>
                                                        </>
                                                        :
                                                        <>
                                                            <span>Currently Leased Out :</span>
                                                            <span>{data.currently_leased_out ? 'Yes' : 'No'}</span>
                                                        </>

                                                }
                                            </div>

                                        </div>
                                        <div className="my-3 lg:my-5">
                                        <button onClick={() => handleIntrseted(data)} className="bg-teal-500 rounded-full sm:p-2 p-1.5 sm:px-16 px-6 text-white">Intrested</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='max-w-screen h-[50vh] flex items-center justify-center'>
                            <div className='flex justify-center items-center gap-4 text-3xl'>
                                <AiOutlineFileSearch />
                                <h1 className='mt-1 uppercase'>No Record Found</h1>
                            </div>
                        </div>
                }




            </div>
        </section >
    );
}

export default Property_list