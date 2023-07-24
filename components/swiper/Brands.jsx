'use client'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper';

const Brands = () => {
    const brandData = [
        {
            id: 1,
            img: "/assets/logo/1280px-JLL_logo.svg.png"
        },
        {
            id: 2,
            img: "/assets/logo/2560px-ICICI_Bank_Logo.svg.png"
        },
        {
            id: 3,
            img: "/assets/logo/https___www_orbisfinancial_in_wp-content_themes_orbis_img_logo_logo_svg.png"
        },
        {
            id: 4,
            img: "/assets/logo/icul-logo.png"
        },
        {
            id: 5,
            img: "/assets/logo/1280px-JLL_logo.svg.png"
        },
        {
            id: 6,
            img: "/assets/logo/2560px-ICICI_Bank_Logo.svg.png"
        },
        {
            id: 7,
            img: "/assets/logo/https___www_orbisfinancial_in_wp-content_themes_orbis_img_logo_logo_svg.png"
        },
        {
            id: 8,
            img: "/assets/logo/icul-logo.png"
        },
    ]
    return (
        <div className='py-10 flex justify-center items-center'>
            <div className='lg:w-[80%] w-[90%]'>
                <Swiper
                    rewind={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >

                    {
                        brandData.map((item) => (
                            <SwiperSlide key={item.id} className='flex justify-center items-center'>
                                <div className='m-auto flex justify-center items-center w-[120px] h-[140px] lg:w-[200px] lg:h-[250px] relative overflow-hidden'>
                                    <Image
                                        src={item.img}
                                        alt='google images'
                                        style={{ objectFit: "cover" }}
                                        width={500}
                                        height={500}
                                        loading="lazy" />
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
            {/* <div className='rounded-full w-[50px] h-[50px] lg:w-[150px] lg:h-[150px] relative overflow-hidden'>
                <Image
                    src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                    alt='google images'
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                    fill={true} />
            </div>
            <div className='rounded-full w-[50px] h-[50px] lg:w-[150px] lg:h-[150px] relative overflow-hidden'>
                <Image
                    src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
                    alt='google images2'
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                    fill={true} />
            </div>
            <div className='rounded-full w-[50px] h-[50px] lg:w-[150px] lg:h-[150px] relative overflow-hidden'>
                <Image
                    src="https://images.unsplash.com/photo-1563694983011-6f4d90358083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    alt='google images3'
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                    fill={true} />
            </div>
            <div className='rounded-full w-[50px] h-[50px] lg:w-[150px] lg:h-[150px] relative overflow-hidden'>
                <Image
                    src="https://images.unsplash.com/photo-1611488006001-eb993d4d2ec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
                    alt='google images4'
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                    fill={true} />
            </div> */}
        </div>
    )
}

export default Brands