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
        img: "https://images.unsplash.com/photo-1551295022-de5522c94e08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1516174881421-64f2583616a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1213&q=80",
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1534283908911-6b9c12f0f118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1321&q=80",
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
                    imgData.map((item) => {
                        return <SwiperSlide key={item.id} className={style.swiperSlide}>
                            <Image fill={true} sizes='100%' src={item.img} alt='banner images' loading='lazy' style={{objectFit:'cover'}} />
                        </SwiperSlide>
                    })
                }

            </Swiper>
        </div>
    )
}

export default Banner