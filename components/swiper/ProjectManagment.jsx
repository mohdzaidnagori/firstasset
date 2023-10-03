"use client"
import React, { useEffect, useState } from 'react'
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-creative';
import axios from '../../app/redux/services/axios';
import Image from 'next/image';
import { MdOutlineBathroom, MdOutlineBedroomParent, MdSportsGymnastics, MdVilla } from 'react-icons/md';
import { BiArea, BiBed, BiCar, BiRupee } from 'react-icons/bi';
import { GiOfficeChair } from 'react-icons/gi';
import { useRouter } from 'next/navigation';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsCalendarDate } from 'react-icons/bs';
import { TbArmchair } from 'react-icons/tb';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';


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
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                grabCursor={true}
                navigation={{
                    nextEl: '.swiper-button-next1',
                    prevEl: '.swiper-button-prev1',
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

                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                {
                    data?.map((item, index) => {
                        const imageArray = JSON.parse(item.images)
                        return (

                            <SwiperSlide key={index}>
                                <div className='group h-[400px] relative rounded-2xl overflow-hidden'>
                                    <div className='absolute w-full h-[85%] bg-slate-100 rounded-t-2xl border-2 border-slate-400 shadow-2xl p-4'>
                                        <div className='absolute right-8 top-8 z-10 bg-gray-900/50 p-1 text-white px-5 rounded-full'>
                                            {
                                                item.property_type === 'c_rents' ? 'Commercial Rent' : item.property_type === 'r_rents' ? 'Residential Rent' : item.property_type === 'c_sales' ? 'Commercial Sale' : item.property_type === 'r_sales' ? 'Residential Sale' : ''
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
                                        <h3 className='text-white uppercase text-xl'>
                                            {item.property_name.length > 13 ? `${item.property_name.substring(0, 13)}...` : item.property_name}
                                        </h3>
                                    </div>
                                    <div className={`absolute ${index === 0 ? 'top-0 group-hover:-top-[100%]' : 'group-hover:top-0 -top-[100%]'}  bg-gray-900/70 text-white left-0 z-10 w-full h-[85%] transition-all duration-300`}>
                                        <div className='m-6'>
                                            <h3 className='text-white uppercase text-2xl text-center font-semibold'>{item.property_name}</h3>
                                            <p className='text-white text-xl text-center'>{item.locality}</p>
                                            <div className='flex mt-10 text-lg justify-center items-center gap-5'>
                                                <div>
                                                    <div className='flex justify-start items-center gap-3 my-2'>
                                                        <BiArea />{item.carpet_area} Carpet sqft
                                                    </div>
                                                    <div className='flex justify-start items-center gap-3 my-2'>
                                                        <BiCar />{item.parking} Parking
                                                    </div>

                                                    <div className='flex justify-start items-center gap-3 my-2'>
                                                        {
                                                            (item.property_type === 'c_rents' || item.property_type === 'c_sales')
                                                                ? <><TbArmchair /> {item.furnished}</>
                                                                :
                                                                <><MdOutlineBathroom /> {item.Bathrooms} Bathrooms</>
                                                        }
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex justify-start items-center gap-3 my-2'>
                                                        <BiRupee /> {formatNumber(item.expected_price)}
                                                    </div>
                                                    <div className='flex justify-start items-center gap-3 my-2'>
                                                        {
                                                            (item.property_type === 'c_rents' || item.property_type === 'c_sales')
                                                                ? <><MdOutlineBathroom /> {item.washrooms} Washroom</>
                                                                :
                                                                <><MdOutlineBedroomParent /> {item.Bedrooms} Bedrooms</>
                                                        }
                                                    </div>
                                                    <div className='flex justify-start items-center gap-3 my-2'>
                                                        <BsCalendarDate />{item.available_from}
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
               
                <div className="w-full flex justify-between">
                    <div className="flex justify-end">
                        <Link className="p-2 px-6 mt-2 text-black underline cursor-pointer" href='/property_list'>View More</Link>
                    </div>
                    <div className='flex my-2 gap-3'>
                        <div className="swiper-button-prev1 rounded-full p-3 bg-teal-500 hover:bg-teal-400">
                            <AiOutlineArrowLeft style={{ fontSize: '18px', fontWeight: '600', zIndex: '10' }} />
                        </div>
                        <div className="swiper-button-next1 rounded-full p-3 bg-teal-500 hover:bg-teal-400">
                            <AiOutlineArrowRight style={{ fontSize: '18px', fontWeight: '600', zIndex: '10' }} />
                        </div>
                    </div>

                </div>
            </Swiper>
        </>
    )

}

export default ProjectManagment