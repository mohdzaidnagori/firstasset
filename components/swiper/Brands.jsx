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
            img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1611488006001-eb993d4d2ec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
        },
        {
            id: 5,
            img: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
        },
        {
            id: 6,
            img: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
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
                                <div  className='m-auto rounded-full w-[80px] h-[80px] lg:w-[150px] lg:h-[150px] relative overflow-hidden'>
                                    <Image
                                        src={item.img}
                                        alt='google images'
                                        style={{ objectFit: "cover" }}
                                        loading="lazy"
                                        fill={true} />
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