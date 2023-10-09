'use client'
import React, { useEffect, useState } from 'react'
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
        head: ''
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
        height: ''
    },
    {
        id: 4,
        img: "/banner/pexels-pixabay-416405.jpg",
        head: 'PROPERTY MANAGEMENT SERVICES',
    }

]


const Banner = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    console.log(imagesLoaded)
    return (
        <div className='absolute w-full h-full inset-0'>
            {(
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
                            translate: [0, 0, -200],
                        },
                        next: {
                            translate: ['100%', '0%', '0%'],
                        },
                    }}
                    modules={[Autoplay, EffectCreative]}
                    className="mySwiper w-full h-full"
                >
                    {
                        imgData.map((item, index) => (
                            <SwiperSlide key={item.id} className={`${style.swiperSlide} relative`}>
                                <div className="placeholder" style={{ display: 'none' }}>
                                    placeholer loading
                                </div>
                                <Image
                                    fill={true}
                                    sizes='100%'
                                    src={item.img}
                                    onLoadingComplete={() => setImagesLoaded(true)}
                                    style={{ objectFit: 'cover' }}
                                    alt='banner images'
                                />
                                {
                                    (item.head !== '' || imagesLoaded ) &&
                                    <>
                                        <div className={`bg-gray-900 absolute top-[50%] rounded-xl translate-y-[-50%] ${index === 1 ? 'md:h-[45%] h-[35%]': index === 2 ? 'h-[20%]' : 'md:h-[30%] h-[25%]'} left-4 sm:w-[40%] w-[80%] opacity-20`} />
                                        <div className={`absolute top-[50%]  translate-y-[-50%] left-4 ${index === 1 ? 'md:h-[45%] h-[35%]': index === 2 ? 'h-[20%]' : 'md:h-[30%] h-[25%]'}  text-white sm:w-[40%] w-[80%]  flex justify-start items-center`}>
                                            <h1 className='sm:text-4xl lg:text-4xl xl:text-[2.8rem] text-3xl  uppercase ml-8 leading-[1.2] xl:leading-[1.3]'>{item?.head}</h1>
                                        </div>
                                    </>
                                }
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            )}
        </div>
    )
}

export default Banner