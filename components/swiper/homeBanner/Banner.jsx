'use client'
import React from 'react'
import { EffectCreative, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide } from "swiper/react";
import style from './Banner.module.css'
import Image from 'next/image';



// import required modules
const imgData = [
    {
        id: 1,
        img: "/banner/Home_Page_Pic_1.jpg",
        head:''
    },
    {
        id: 2,
        img: "/banner/Home_Page_Pic_2.jpeg",
        head: 'FRACTIONAL OWNERSHIP of COMMERCIAL REAL ESTATE',
    },
    {
        id: 3,
        img: "/banner/pexels-rdne-stock-project-8293700.jpg",
        head: 'MANDATED PROJECTS',
        height:''
    },
    {
        id: 4,
        img: "/banner/pexels-pixabay-416405.jpg",
        head: 'PROPERTY MANAGEMENT SERVICES',
    }

]


const Banner = () => {
    return (
        <div className='absolute w-full h-full inset-0'>
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
                modules={[Autoplay, EffectCreative]}
                className="mySwiper w-full h-full"
            >
                {
                    imgData.map((item) => (
                        <SwiperSlide key={item.id} className={`${style.swiperSlide} relative`}>
                            <Image fill={true} sizes='100%' src={item.img} alt='banner images' loading='lazy' style={{ objectFit: 'cover' }} />
                            {
                                item.head !== '' &&
                                <>
                                    <div className='bg-gray-900 absolute top-[50%] translate-y-[-50%] left-4 sm:w-[40%] h-[30%] w-[80%] opacity-20' />
                                    <div className='absolute top-[50%] translate-y-[-50%] left-4 text-white sm:w-[40%] w-[80%] h-[50%] flex justify-start items-center'>
                                        <h1 className='sm:text-4xl md:text-5xl text-3xl uppercase ml-8 leading-relaxed'>{item?.head}</h1>
                                    </div>
                                </>
                            }
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}

export default Banner