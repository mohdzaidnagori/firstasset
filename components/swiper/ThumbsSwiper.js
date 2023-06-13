'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BiBath, BiSolidCar, BiArea, BiBed } from "react-icons/bi";
import { MdOutlineLocationOn } from 'react-icons/md'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";



// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";
import { AiOutlineCar } from "react-icons/ai";

const ThumbsSwiper = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const thumbsnailData = [
        {
            id:1,
            url:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80'
        },
        {
            id:2,
            url:'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
        },
        {
            id:3,
            url:'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=410&q=80'
        },
        {
            id:4,
            url:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id:5,
            url:'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id:6,
            url:'https://images.unsplash.com/photo-1602497485099-e41a116a272c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id:7,
            url:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        }
    ]

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-pagination-color": "#000",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="w-full h-[65%] md:h-[60%]"
            >
            {
             thumbsnailData.map((items) => {
                return (
                    <SwiperSlide key={items.id}>
                    <div className="flex h-full gap-5 p-5 lg:p-0">
                        <div className="w-[50%] xl:w-[40%] rounded-[40px] relative overflow-hidden">
                            <Image
                                src={items.url}
                                alt="thumbsnail top image"
                                fill={true}
                                style={{ objectFit: 'cover' }}
                                loading="lazy"
                            />
                        </div>
                        <div className="w-[50%] xl:w-[60%] rounded-[40px] xl:px-5">
                            <div className="flex flex-col justify-center h-full">
                                <h3 className="xl:text-xl lg:text-lg md:text-xl sm:text-xl text-[14px] capitalize font-semibold text-gray-800">Neelaaksh apartment for Rent</h3>
                                <div className="flex justify-start gap-2 items-center sm:text-base text-xs py-2 text-gray-800">
                                    <MdOutlineLocationOn />
                                    <p>Mira road near railway station road mumbai</p>
                                </div>
                                <div className="xl:w-[80%] md:w-[70%] lg:w-full w-[110%] bg-gray-600/10 rounded-full my-3">
                                    <ul className="flex justify-center items-center md:font-semibold gap-1 text-gray-900 sm:text-base text-xs">
                                    <li className="flex p-2 justify-center items-center"><BiBed />
                                            <span className="pl-1 mt-1">1</span>
                                        </li>
                                        <li className="flex p-2 justify-center items-center"><BiBath />
                                            <span className="pl-1 mt-1">1</span>
                                        </li>
                                        <li className="flex p-2 justify-center items-center"><AiOutlineCar />
                                            <span className="pl-1 mt-1">1</span>
                                        </li>
                                        <li className="flex p-2 justify-center items-center"><BiArea />
                                            <span className="pl-1 mt-1">22m Sq</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="my-2">
                                    <p className="sm:text-sm xl:text-base text-xs"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto delectus, eos tempore est recusandae fuga dolore quidem non voluptatem corrupti mollitia accusamus, incidunt, dicta exercitationem quam eum. Nostrum, obcaecati mollitia!!...</p>
                                </div>
                                <div className="my-3 lg:my-5">
                                    <button className="bg-teal-500 rounded-full sm:p-2 p-1.5 sm:px-16 px-6 text-white">View Details</button>
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
                className="w-full h-[30%] md:h-[40%] xl:m-5 m-2"
            >
                
            {
                thumbsnailData.map((items) => {
                    return (
                        <SwiperSlide
                    className="relative rounded-2xl border border-black overflow-hidden"
                    style={{ maxHeight: '210px' }}
                    key={items.id}
                >
                    <div className="relative h-full">
                        <div className="absolute h-1/2 md:h-[60%] w-full top-0">
                            <Image src={items.url}
                                alt="thumsnail card images" fill={true}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="absolute top-[50%] md:top-[60%] h-1/2 md:h-[40%] w-full">
                            <div>
                                <h4 className="text-black font-semibold xl:text-md text-sm  pl-2 pt-2">Neelaakash apartment</h4>
                                <p className="text-gray-500 text-sm pl-2">Mira road mumbai </p>
                                <ul className="hidden sm:flex justify-start items-center gap-1 text-gray-400 sm:text-sm text-xs pl-1">
                                    <li className="flex xl:p-2 p-1 justify-center items-center"><BiBath />
                                        <span className="pl-1 mt-1">1</span>
                                    </li>
                                    <li className="flex xl:p-2 p-1 justify-center items-center"><AiOutlineCar />
                                        <span className="pl-1 mt-1">1</span>
                                    </li>
                                    <li className="flex xl:p-2 p-1 justify-center items-center"><BiArea />
                                        <span className="pl-1 mt-1">22m Sq</span>
                                    </li>
                                </ul>
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