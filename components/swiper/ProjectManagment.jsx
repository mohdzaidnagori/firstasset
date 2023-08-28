"use client"
import React, { useEffect, useState } from 'react'
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import 'swiper/css/effect-creative';
import axios from '../../app/redux/services/axios';
import Image from 'next/image';
import { MdOutlineBathroom } from 'react-icons/md';
import { BiArea, BiCar, BiCategory, BiUser } from 'react-icons/bi';
import { GiBunkBeds } from 'react-icons/gi';
import { TbRulerMeasure } from 'react-icons/tb';
import { useRouter } from 'next/navigation';


const ProjectManagment = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchPropertyData();
    }, []);





    const fetchPropertyData = async () => {
        const url = 'commerical-rents'
        try {
            const response = await axios.get(url);
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const router = useRouter()
    const handleView = (id, type) => {
        router.push(`/project/property/${id}/${type}`)
    }

    return (
        <>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    data?.map((item, index) => {
                        const imageArray = JSON.parse(item.images)
                        const property_type = item.property_type === 'c_rents' ? 'Commercial Rent' : item.property_type === 'c_sales' ? 'Commercial Sale' : item.property_type === 'r_rents' ? 'Residential Rent' : item.property_type === 'r_sales' ? 'Residential Sale' : ''
                        return (
                            <SwiperSlide key={index}>
                                <div className='group h-[400px] relative rounded-2xl overflow-hidden'>
                                    <div className='absolute w-full h-[85%] bg-slate-100 rounded-t-2xl border-2 border-slate-400 shadow-2xl p-4'>
                                        <div className='absolute right-4 top-4 bg-red-600 p-1 text-white px-5 rounded-full'>
                                            {
                                                (item.property_type === 'c_rents' || item.property_type === 'r_rents') ? 'Rent' : 'Sale'
                                            }
                                        </div>
                                        <div className='relative h-full w-full rounded-2xl overflow-hidden'>
                                            <Image fill={true}
                                                sizes='100%'
                                                src={`https://skilliza.com/wscubetech/public/images/${imageArray[0]}`}
                                                alt='banner images' loading='lazy'
                                                style={{ objectFit: 'fill' }} />
                                        </div>
                                    </div>
                                    <div className='absolute px-8 bottom-0 h-[15%] w-full bg-slate-900 flex justify-between items-center'>
                                        <button onClick={() => handleView(item.id, item.property_type)} className='bg-teal-500 px-4 py-2 rounded-full'>View More</button>
                                        <h3 className='text-white uppercase text-xl'>{item.property_name}</h3>
                                    </div>
                                    <div className='absolute group-hover:top-0 bg-gray-900/70 text-white -top-[100%] left-0 z-10 w-full h-[85%] transition-all duration-300'>
                                        <div className='m-6'>
                                            <h3 className='text-white uppercase text-2xl text-center font-semibold'>{item.property_name}</h3>
                                            <p className='text-white text-xl text-center'>{property_type}</p>
                                            <div className='flex mt-10 text-lg justify-center items-center gap-5'>
                                                <div>
                                                    <div className='flex justify-start items-center gap-3 my-2'>
                                                        <BiUser />{item.user_name}
                                                    </div>
                                                    <div className='flex justify-start items-center gap-3 my-2'>
                                                        <BiCategory /> {item.type}
                                                    </div>
                                                    <div className='flex justify-start items-center gap-3 my-2'>
                                                        <GiBunkBeds />{item.furnished_status}
                                                    </div><div className='flex justify-start items-center gap-3 my-2'>
                                                        <MdOutlineBathroom />{item.washrooms} Washroom
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex justify-start items-center gap-3 my-2'>
                                                        <BiArea />{item.carpet_area || item.carpet_area_sqft} Carpet sqft
                                                    </div>
                                                    <div className='flex justify-start items-center gap-3 my-2'>
                                                        <BiArea />{item.super_area_sqft || item.super_area} Super sqft
                                                    </div>
                                                    <div className='flex justify-start items-center gap-3 my-2'>
                                                        <TbRulerMeasure />{item.floor_number}
                                                    </div>
                                                    <div className='flex justify-start items-center gap-3 my-2'>
                                                        <BiCar />{item.total_floor} Parking
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )

}

export default ProjectManagment