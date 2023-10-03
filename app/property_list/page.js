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
import WordLimit from '../../components/text/WordLimit';

const Propert_list = () => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loading,setLoading] = useState(true)
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
            setLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false)
        }
    }

    const handleIntrseted = (item, index) => {
        setIntrestedData(item)
        setInterestedItemIndex(index);
    }
    function createMarkup(datas) {
        return { __html: datas };
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

    function createMarkup(data) {
        return { __html: data };
    }
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
            <div className='pb-4 bg-teal-300'>

                {
                    data.length !== 0 ?

                        data.map((item, index) => {
                            const imgArray = JSON.parse(item?.images);
                            return (
                                <div key={index} className="flex items-center p-5 lg:px-10 lg:pt-4 lg:pb-0 overflow-hidden relative">
                                    {
                                        <div className={`absolute ${interestedItemIndex === index ? 'top-0' : '-top-[100%] '} left-[50%] translate-x-[-50%] z-[999] w-[80%] h-full border-2 bg-white transition-all duration-300`}>
                                            <div onClick={() => setInterestedItemIndex(null)} className=" absolute top-10 left-5 bg-white p-1 rounded-full shadow-xl shadow-gray-900/60">
                                                <MdClose className="text-2xl" />
                                            </div>
                                            <div className="h-full">
                                                {
                                                    index === interestedItemIndex && <IntresetedForm data={IntrestedData} type='project managment' click={() => setInterestedItemIndex(null)} intrested={interestedItemIndex !== null} />
                                                }
                                            </div>
                                        </div>
                                    }
                                    <div className="w-full max-w-8xl rounded bg-white shadow-xl p-10  lg:px-20 lg:py-6 mx-auto text-gray-800 relative md:text-left">
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
                                                    <h3 className="font-bold uppercase text-base mb-3">{item.property_address}</h3>
                                                    {/* <p className="text-base" dangerouslySetInnerHTML={createMarkup(item?.description)} /> */}
                                                    <p>
                                                        <WordLimit text={item.description} height='[200px]' />
                                                    </p>
                                                </div>
                                                <div className='grid md:grid-cols-2 grid-cols-1 gap-4 '>
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Locality :</span>
                                                        <span>{item.locality}</span>
                                                    </div>
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Property Type :</span>
                                                        <span>{item.type}</span>
                                                    </div>
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Price :</span>
                                                        <span>{formatNumber(item.expected_price)}</span>
                                                    </div>
                                                    {
                                                        (item.property_type === 'r_rents' || item.property_type === 'r_sales')
                                                        &&
                                                        <>
                                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                <span>Bedrooms :</span>
                                                                <span>{item.Bedrooms}</span>
                                                            </div>
                                                        </>
                                                    }
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Available From :</span>
                                                        <span>{item.available_from}</span>
                                                    </div>
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Carpet Area :</span>
                                                        <span>{item.carpet_area} sqft</span>
                                                    </div>
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Facing Side :</span>
                                                        <span>{item.facing}</span>
                                                    </div>
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Furnished Status :</span>
                                                        <span>{item.furnished}</span>
                                                    </div>
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Parking :</span>
                                                        <span>{item.parking}</span>
                                                    </div>
                                                    {
                                                        (item.property_type === 'c_rents' || item.property_type === 'c_sales')
                                                            ?
                                                            <>
                                                                <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                    <span>Washrooms :</span>
                                                                    <span>{item.washrooms}</span>
                                                                </div>
                                                                <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                    <span>Pantry Cafeteria :</span>
                                                                    <span>{item.pantry_cafeteria ? 'Yes' : 'No'}</span>
                                                                </div>
                                                            </>
                                                            :
                                                            <>
                                                                <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                    <span>Bathrooms :</span>
                                                                    <span>{item.Bathrooms}</span>
                                                                </div>
                                                                <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                    <span>Swimming pool :</span>
                                                                    <span>{item.swimming_pool ? 'Yes' : 'No'}</span>
                                                                </div>
                                                            </>
                                                    }
                                                    {
                                                        (item.property_type === 'r_sales' || item.property_type === 'c_sales')
                                                            ?
                                                            <>
                                                                <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                    <span>Possesions Status :</span>
                                                                    <span>{item.status}</span>
                                                                </div>
                                                                <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                    <span>Currently Leased out :</span>
                                                                    <span>{item.currently_leased_out ? 'Yes' : 'No'}</span>
                                                                </div>
                                                            </>
                                                            :
                                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                <span>Security Deposit :</span>
                                                                <span>{item.security_deposite}</span>
                                                            </div>
                                                    }
                                                    {
                                                        (item.property_type === 'c_rents' || item.property_type === 'c_sales')
                                                            ?
                                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                <span>Monthly Maintenance :</span>
                                                                <span>{item.maintenance_monthly}</span>
                                                            </div>
                                                            :
                                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                <span>Gym :</span>
                                                                <span>{item.gym ? 'Yes' : 'No'}</span>
                                                            </div>
                                                    }
                                                    {
                                                        (item.property_type === 'r_rents' || item.property_type === 'r_sales')
                                                        &&
                                                        <>
                                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                <span>Balconies :</span>
                                                                <span>{item.Balconies}</span>
                                                            </div>
                                                        </>


                                                    }
                                                    {
                                                        (item.property_type === 'r_rents')
                                                        &&
                                                        <>
                                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                <span>Are Pets Allowed :</span>
                                                                <span>{item.are_peds ? 'Yes' : 'No'}</span>
                                                            </div>
                                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                <span>Are Non Vegetarian Allowed :</span>
                                                                <span>{item.are_non_veg ? 'Yes' : 'No'}</span>
                                                            </div>
                                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                <span>Are Bachelor Preferred :</span>
                                                                <span>{item.are_bachlore ? 'Yes' : 'No'}</span>
                                                            </div>
                                                        </>


                                                    }



                                                </div>
                                                <div className="my-3 lg:my-5">
                                                    <button onClick={() => handleIntrseted(item, index)} className="bg-teal-500 rounded-full sm:p-2 p-1.5 sm:px-16 px-6 text-white">Interested</button>
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




            </div>
        </section >
    );
}

export default Propert_list