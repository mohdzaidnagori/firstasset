'use client'
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BiBath, BiSolidCar, BiArea, BiBed } from "react-icons/bi";
import { FaRupeeSign } from "react-icons/fa";
import { MdClose, MdOutlineLocationOn } from 'react-icons/md'
import style from '../swiper/homeBanner/Banner.module.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import 'swiper/css/effect-creative';



// import required modules
import { FreeMode, Navigation, Thumbs ,Autoplay} from "swiper";
import Image from "next/image";
import { AiOutlineCar } from "react-icons/ai";
import axios from "../../app/redux/services/axios";
import { RiPriceTagFill } from "react-icons/ri";
import WordLimit from "../text/WordLimit";
import IntresetedForm from "../userForm/IntresetedForm";

const ThumbsSwiper = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [data, setData] = useState([])
    const [IntrestedData,setIntrestedData] = useState([])
    const [Intrested,setIntrested] = useState(false)
    const cancelTokenSource = axios.CancelToken.source();


    const fraction_view = async () => {
        const url = 'admin/fractional_view';
        const config = {
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

    const handleIntrseted = (item) => {
        setIntrestedData(item)
        setIntrested(true) 
    }

    return (
        <>
           {
           <div className={`absolute ${Intrested ? 'top-0' : '-top-[100%] '} left-0 z-10 w-full h-full bg-white transition-all duration-300`}>
            <div onClick={() => setIntrested(false)} className=" absolute top-10 left-5 bg-white p-1 rounded-full shadow-xl shadow-gray-900/60">
                <MdClose className="text-2xl" />
            </div>
            <div className="h-full">
                <IntresetedForm data={IntrestedData} type='fractional' click={() => setIntrested(false)} intrested={Intrested} />
            </div>
           </div>
           }
            <Swiper
                style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-pagination-color": "#000",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="w-full h-[85%] md:h-[60%]"
            >
                {
                    data.map((items,index) => {
                        const imageArray = JSON.parse(items.images)
                        return (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col md:flex-row h-full gap-5 p-5 lg:p-0">
                                    <div className="md:w-[50%] w-full h-[50%] md:h-full xl:w-[50%] rounded-[40px] relative overflow-hidden">
                                        <div className='absolute w-full h-full z-10'>
                                            <Swiper
                                                grabCursor={true}
                                                effect={'creative'}
                                                loop={true}
                                                navigation={true}
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
                                                modules={[Autoplay ,Navigation,]}
                                                className="mySwiper w-full h-full"
                                            >
                                                {
                                                    imageArray.map((item,index) => {
                                                        return <SwiperSlide key={index} className={style.swiperSlide}>
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
                                    </div>
                                    <div className="w-full md:w-[50%] xl:w-[50%] rounded-[40px] xl:px-5">
                                        <div className="flex flex-col justify-center h-full relative">
                                            <h3 className="pl-6 md:pl-0 xl:text-xl lg:text-lg md:text-xl sm:text-xl text-[18px] capitalize font-semibold text-gray-800">{items.name}</h3>
                                            <div className="flex justify-start gap-2 items-center text-base py-2 text-gray-800">
                                                <span>
                                                    <MdOutlineLocationOn />
                                                </span>
                                                <p>{items.location}</p>
                                            </div>
                                            <div className="xl:w-[80%] md:w-[70%] lg:w-full  bg-gray-600/10 rounded-full my-3">
                                                <ul className="flex justify-around items-center md:font-semibold sm:gap-1 text-gray-900 text-base">
                                                    <li className="flex p-2 justify-center items-center"><FaRupeeSign />
                                                        <span className="pl-1 mt-1">{items.price}</span>
                                                    </li>
                                                    <li className="flex p-2 justify-center items-center"><BiArea />
                                                        <span className="pl-1 mt-1">{items.carpet_area} Sqft</span>
                                                    </li>
                                                </ul>

                                            </div>
                                            <div className="xl:w-[80%] md:w-[70%]  lg:w-full bg-gray-600/10 rounded-full my-3">
                                                <ul className="flex justify-around p-2 items-center md:font-medium sm:gap-1 text-gray-900 text-base">
                                                    <span className="pl-1 mt-1">Target IRR: {items.target_irr}</span>
                                                    <span className="pl-1 mt-1">Entry Yield:  {items.entry_yield}</span>
                                                </ul>
                                            </div>
                                            <div className="my-2">
                                                <WordLimit text={items.description} />
                                            </div>
                                            <div className="my-3 lg:my-5">
                                                <button onClick={() => handleIntrseted(items)} className="bg-teal-500 rounded-full sm:p-2 p-1.5 sm:px-16 px-6 text-white">Intrested</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="w-full h-[15%] md:h-[40%] xl:m-5 m-2"
            >

                {
                    data.map((items,index) => {
                        const image = JSON.parse(items.images)

                        return (
                            <SwiperSlide
                                className="relative rounded-2xl border border-black overflow-hidden"
                                style={{ maxHeight: '210px' }}
                                key={index}
                            >
                                <div className="relative h-full">
                                    <div className="absolute h-1/2 md:h-[60%] w-full top-0">
                                        <Image
                                         src={`https://skilliza.com/wscubetech/public/images/${image[0]}`}
                                            alt="thumsnail card images" fill={true}
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="absolute top-[50%] md:top-[60%] h-1/2 md:h-[40%] w-full">
                                        <div>
                                            <h4 className="text-black font-semibold xl:text-md text-sm  pl-2 pt-2">{items.name}</h4>
                                            <p className="hidden md:block text-gray-500 text-sm pl-2">{items.location}</p>
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

export default ThumbsSwiper