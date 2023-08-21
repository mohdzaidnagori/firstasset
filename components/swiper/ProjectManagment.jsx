"use client"
import React, { useState } from 'react'
import 'swiper/css/thumbs';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BiBath, BiSolidCar, BiArea, BiBed } from "react-icons/bi";
import { FaRupeeSign } from "react-icons/fa";
import { MdClose, MdOutlineLocationOn } from 'react-icons/md'
import style from '../swiper/homeBanner/Banner.module.css'
// import required modules
import { FreeMode, Navigation, EffectCards, Thumbs, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import 'swiper/css/effect-creative';


const ProjectManagment = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const topSlider = [
        {
            id: 1,
            name: 'Abc',
            img: 'https://swiperjs.com/demos/images/nature-1.jpg'
        },
        {
            id: 2,
            name: 'Abc',
            img: 'https://swiperjs.com/demos/images/nature-2.jpg'
        },
        {
            id: 3,
            name: 'Abc',
            img: 'https://swiperjs.com/demos/images/nature-3.jpg'
        },
        {
            id: 4,
            name: 'Abc',
            img: 'https://swiperjs.com/demos/images/nature-4.jpg'
        }
    ]

    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, Thumbs]}
                className="mySwiper2"
            >
                {
                    topSlider.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item.img} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {
                    topSlider.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item.img} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}

export default ProjectManagment