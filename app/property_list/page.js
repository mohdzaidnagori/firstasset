"use client"
import Link from 'next/link';
import axios from '../redux/services/axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { EffectCreative, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import style from '../../components/swiper/homeBanner/Banner.module.css'
import { BiCard } from 'react-icons/bi';
import { FiType } from 'react-icons/fi';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import IntresetedForm from '../../components/userForm/IntresetedForm';

const Propert_list = () => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [orderBy, setOrderBy] = useState('distance');
    const [IntrestedData, setIntrestedData] = useState([])
    const [interestedItemIndex, setInterestedItemIndex] = useState(null);


    useEffect(() => {
        fetchPropertyData();
    }, [searchText, orderBy]);





    const fetchPropertyData = async () => {
        const url = 'commerical-rents'
        try {
            const response = await axios.get(url, {
                params: {
                    search: searchText,
                    orderBy,
                }
            });
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleIntrseted = (item,index) => {
        setIntrestedData(item)
        setInterestedItemIndex(index);
    }
    function createMarkup(datas) {
        return { __html: datas };
    }

console.log(data)
    return (
        <section>
            <div className='py-6 md:px-10 flex md:justify-start justify-center items-center'>
                <div className='border-2 border-gray-800 w-[300px] rounded-lg py-2'>
                    <input
                        type="text"
                        className='ps-3 bg-transparent placeholder-black border-none outline-none text-black text-base'
                        placeholder="Search Property Name"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
            </div>
            <div className='py-5'>
                {
                    data.length !== 0 ?

                        data.map((item, index) => {
                            const imgArray = JSON.parse(item?.images);
                            return (
                                <div key={index} className="min-w-screen min-h-screen bg-teal-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
                                    {
                                        <div className={`absolute ${interestedItemIndex === index ? 'top-0' : '-top-[100%] '} left-[50%] translate-x-[-50%] z-[999] w-[80%] h-full border-2 bg-white transition-all duration-300`}>
                                            <div onClick={() => setInterestedItemIndex(null)} className=" absolute top-10 left-5 bg-white p-1 rounded-full shadow-xl shadow-gray-900/60">
                                                <MdClose className="text-2xl" />
                                            </div>
                                            <div className="h-full">
                                               {
                                                index === interestedItemIndex &&  <IntresetedForm data={IntrestedData} type='project managment' click={() => setInterestedItemIndex(null)} intrested={interestedItemIndex !== null} />
                                               }
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
                                                                imgArray.map((item) => {
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
                                                    <h1 className="font-bold uppercase text-2xl mb-2">{item.property_name}</h1>
                                                    <h3 className="font-bold uppercase text-lg mb-3">{item.locality}</h3>
                                                    <p className="text-base" dangerouslySetInnerHTML={createMarkup(item?.description)} />
                                                </div>
                                                <div className='grid md:grid-cols-2 grid-cols-1 gap-4 '>
                                                    {
                                                        item.maintenance_charge &&
                                                        <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                            <span>Maintenance Charge :</span>
                                                            <span>{item.maintenance_charge}</span>
                                                        </div>
                                                    }

                                                    {item.expected_monthly_rent &&
                                                        <div className='flex gap-2 items-center justify-start'>
                                                            <span>E Monthly Rent :</span>
                                                            <span>{item.expected_monthly_rent}</span>
                                                        </div>
                                                    }
                                                    <div className='flex gap-2 items-center justify-start'>
                                                        <span>Furnished :</span>
                                                        <span>{item.furnished_status}</span>
                                                    </div>
                                                    {
                                                        item.security_amount &&
                                                        <div className='flex gap-2 items-center justify-start'>
                                                            <span>Security Amount :</span>
                                                            <span>{item.security_amount}</span>
                                                        </div>
                                                    }
                                                    <div className='flex gap-2 items-center justify-start'>
                                                        <span>Type :</span>
                                                        <span>{item.type}</span>
                                                    </div>
                                                    <div className='flex gap-2 items-center justify-start'>
                                                        <span>Bedroom :</span>
                                                        <span>{item.floor_number}</span>
                                                    </div>

                                                    <div className='flex gap-2 items-center justify-start'>
                                                        <span>Parking :</span>
                                                        <span>{item.total_floor}</span>
                                                    </div>
                                                    <div className='flex gap-2 items-center justify-start'>
                                                        <span>Washrooms :</span>
                                                        <span>{item.washrooms}</span>
                                                    </div>
                                                    {
                                                        item.Bedroom &&
                                                        <>
                                                            <div className='flex gap-2 items-center justify-start'>
                                                                <span>Bedroom :</span>
                                                                <span>{item.Bedroom}</span>
                                                            </div>
                                                            <div className='flex gap-2 items-center justify-start'>
                                                                <span>Bathrooms :</span>
                                                                <span>{item.Bathrooms}</span>
                                                            </div>
                                                            <div className='flex gap-2 items-center justify-start'>
                                                                <span>Balconies :</span>
                                                                <span>{item.Balconies}</span>
                                                            </div>
                                                        </>

                                                    }

                                                    <div className='flex gap-2 items-center justify-start'>
                                                        <span>Pantry Cafetaria :</span>
                                                        <span>{item.pantry_cafeteria ? 'Yes' : 'No'}</span>
                                                    </div>

                                                    {
                                                        item.carpet_area ?
                                                            <>
                                                                <div className='flex gap-2 items-center justify-start'>
                                                                    <span>Carpet Area :</span>
                                                                    <span>{item.carpet_area} sqft</span>
                                                                </div>
                                                                <div className='flex gap-2 items-center justify-start'>
                                                                    <span>Super Area :</span>
                                                                    <span>{item.super_area} sqft</span>
                                                                </div>
                                                            </>
                                                            :
                                                            <>
                                                                <div className='flex gap-2 items-center justify-start'>
                                                                    <span>Carpet Area :</span>
                                                                    <span>{item.carpet_area_sqft} sqft</span>
                                                                </div>
                                                                <div className='flex gap-2 items-center justify-start'>
                                                                    <span>Super Area :</span>
                                                                    <span>{item.super_area_sqft} sqft</span>
                                                                </div>
                                                            </>
                                                    }
                                                    {
                                                        item.who_are_bachlelor &&
                                                        <>
                                                            <div className='flex gap-2 items-center justify-start'>
                                                                <span>Who are Bachlelor :</span>
                                                                <span>{item.who_are_bachlelor ? 'Yes' : 'No'}</span>
                                                            </div>
                                                            <div className='flex gap-2 items-center justify-start'>
                                                                <span>Who eat non veg :</span>
                                                                <span>{item.who_eat_non_veg ? 'Yes' : 'No'}</span>
                                                            </div>
                                                            <div className='flex gap-2 items-center justify-start'>
                                                                <span>With Pets :</span>
                                                                <span>{item.with_pets ? 'Yes' : 'No'}</span>
                                                            </div>
                                                        </>
                                                    }
                                                    {

                                                        item.availability_date ?
                                                            <div className='flex gap-2 items-center justify-start'>
                                                                <span>Available Date :</span>
                                                                <span>{item.availability_date}</span>
                                                            </div>
                                                            :
                                                            <div className='flex gap-2 items-center justify-start'>
                                                                <span>Available Date :</span>
                                                                <span>{item.available_from}</span>
                                                            </div>

                                                    }
                                                    {
                                                        item.expected_sale_price &&
                                                        <div className='flex gap-2 items-center justify-start'>
                                                            <span>Expected sale price :</span>
                                                            <span>{item.expected_sale_price}</span>
                                                        </div>
                                                    }
                                                    {
                                                        item.possession_status &&
                                                        <div className='flex gap-2 items-center justify-start'>
                                                            <span>Possession Status :</span>
                                                            <span>{item.possession_status}</span>
                                                        </div>

                                                    }
                                                    {
                                                        item.age_of_construction &&
                                                        <div className='flex gap-2 items-center justify-start'>
                                                            <span>Age Of Construction :</span>
                                                            <span>{item.age_of_construction}</span>
                                                        </div>
                                                    }
                                                    <div className='flex gap-2 items-center justify-start'>
                                                        {
                                                            item.currently_rented_out ?
                                                                <>
                                                                    <span>Currently Rent Out :</span>
                                                                    <span>{item.currently_rented_out ? 'Yes' : 'No'}</span>
                                                                </>
                                                                :
                                                                <>
                                                                    <span>Currently Leased Out :</span>
                                                                    <span>{item.currently_leased_out ? 'Yes' : 'No'}</span>
                                                                </>

                                                        }
                                                    </div>

                                                </div>
                                                <div className="my-3 lg:my-5">
                                                    <button onClick={() => handleIntrseted(item,index)} className="bg-teal-500 rounded-full sm:p-2 p-1.5 sm:px-16 px-6 text-white">Intrested</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })



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

export default Propert_list