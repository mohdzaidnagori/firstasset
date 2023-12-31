"use client"
import Link from 'next/link';
import axios from '../../../redux/services/axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { EffectCreative, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-creative';
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import style from '../../../../components/swiper/homeBanner/Banner.module.css'
import { AiOutlineFileSearch } from 'react-icons/ai';
import IntresetedForm from '../../../../components/userForm/IntresetedForm';
import { MdClose } from 'react-icons/md';

const Property_list = ({ params }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
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
                            <div className="w-full max-w-8xl rounded-[2rem]  bg-white shadow-xl px-10  lg:p-20 mx-auto text-gray-800 relative md:text-left">
                                <div className="md:flex items-center -mx-10">
                                    <div className="realtive  md:w-1/2 p-1 md:px-10 mb-10 md:mb-0">
                                        <div className="relative h-[400px] w-full">
                                            <div className='absolute w-full h-full z-10 rounded-[2rem] overflow-hidden'>
                                                <Swiper
                                                    style={{
                                                        "--swiper-navigation-color": "#000",
                                                        "--swiper-pagination-color": "#000",
                                                    }}
                                                    grabCursor={true}
                                                    effect={'creative'}
                                                    navigation={true}
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
                                                    modules={[Autoplay, Navigation]}
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
                                            <div className="md:border-4 border-yellow-200 rounded-[2rem] absolute h-full w-full top-10 bottom-10 left-10 right-10 z-0"></div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 px-10">
                                        <div className="mb-10">
                                            <h1 className="font-bold uppercase text-2xl mb-2">{data.property_name}</h1>
                                            <h3 className="font-bold uppercase text-lg mb-3">{data.property_address}</h3>
                                            <p className="text-base" dangerouslySetInnerHTML={createMarkup(data?.description)} />
                                        </div>
                                        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 '>
                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                <span>Locality :</span>
                                                <span>{data.locality}</span>
                                            </div>
                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                <span>Property Type :</span>
                                                <span>{data.type}</span>
                                            </div>
                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                <span>Price :</span>
                                                <span>{formatNumber(data.expected_price)}</span>
                                            </div>
                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                <span>Available From :</span>
                                                <span>{data.available_from}</span>
                                            </div>
                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                <span>Carpet Area :</span>
                                                <span>{data.carpet_area} sqft</span>
                                            </div>
                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                <span>Facing Side :</span>
                                                <span>{data.facing}</span>
                                            </div>
                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                <span>Furnished Status :</span>
                                                <span>{data.furnished}</span>
                                            </div>
                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                <span>Parking :</span>
                                                <span>{data.parking}</span>
                                            </div>
                                            {
                                                (data.property_type === 'c_rents' || data.property_type === 'c_sales')
                                                    ?
                                                    <>
                                                        <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                            <span>Washrooms :</span>
                                                            <span>{data.washrooms}</span>
                                                        </div>
                                                        <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                            <span>Pantry Cafeteria :</span>
                                                            <span>{data.pantry_cafeteria ? 'Yes' : 'No'}</span>
                                                        </div>
                                                    </>
                                                    :
                                                    <>
                                                        <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                            <span>Bathrooms :</span>
                                                            <span>{data.Bathrooms}</span>
                                                        </div>
                                                        <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                            <span>Swimming pool :</span>
                                                            <span>{data.swimming_pool ? 'Yes' : 'No'}</span>
                                                        </div>
                                                    </>
                                            }
                                            {
                                                (data.property_type === 'r_sales' || data.property_type === 'c_sales')
                                                    ?
                                                    <>
                                                        <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                            <span>Possesions Status :</span>
                                                            <span>{data.status}</span>
                                                        </div>
                                                        <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                            <span>Currently Leased out :</span>
                                                            <span>{data.currently_leased_out ? 'Yes' : 'No'}</span>
                                                        </div>
                                                    </>
                                                    :
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Security Deposit :</span>
                                                        <span>{data.security_deposite}</span>
                                                    </div>
                                            }
                                            {
                                                (data.property_type === 'c_rents' || data.property_type === 'c_sales')
                                                    ?
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Monthly Maintenance :</span>
                                                        <span>{data.maintenance_monthly}</span>
                                                    </div>
                                                    :
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Gym :</span>
                                                        <span>{data.gym ? 'Yes' : 'No'}</span>
                                                    </div>
                                            }
                                            {
                                                (data.property_type === 'r_rents' || data.property_type === 'r_sales')
                                                &&
                                                <>
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Bedrooms :</span>
                                                        <span>{data.Bedrooms}</span>
                                                    </div>
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Balconies :</span>
                                                        <span>{data.Balconies}</span>
                                                    </div>
                                                </>


                                            }
                                            {
                                                (data.property_type === 'r_rents')
                                                &&
                                                <>
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Are Pets Allowed :</span>
                                                        <span>{data.are_peds ? 'Yes' : 'No'}</span>
                                                    </div>
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Are Non Vegetarian Allowed :</span>
                                                        <span>{data.are_non_veg ? 'Yes' : 'No'}</span>
                                                    </div>
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Are Bachelor Preferred :</span>
                                                        <span>{data.are_bachlore ? 'Yes' : 'No'}</span>
                                                    </div>
                                                </>


                                            }
                                            <div className="my-3 lg:my-5">
                                                <button onClick={() => handleIntrseted(data)} className="bg-teal-500 rounded-full sm:p-2 p-1.5 sm:px-16 px-6 text-white">Interested</button>
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

export default Property_list