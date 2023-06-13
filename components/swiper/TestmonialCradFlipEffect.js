'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import styles from "./FlipStyle.module.css"


// import required modules
import { EffectCards } from "swiper";
import Image from "next/image";

const testmonialData = [
    {
        id: 1,
        bg: 'bg-orange-100',
        url: 'https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        para: 'First Assets has been a game-changer for me in the real estate market. Their dedicated team of brokers provided invaluable insights and guidance throughout the entire process. Thanks to their expertise, I found the perfect property that exceeded my expectations.',
        name: 'Sarah Marccello',
        email: 'SarahmarceelAgmail.com'

    },
    {
        id: 2,
        bg: 'bg-rose-100',
        url: 'https://images.unsplash.com/photo-1511079727166-22288ec84472?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
        para: 'Working with First Assets was an absolute pleasure. Their professionalism and attention to detail ensured a smooth and stress-free experience. I couldn"t be happier with the property I purchased through them. Highly recommended!',
        name: 'john david michel',
        email: 'SarahmarceelAgmail.com'

    },
    {
        id: 3,
        bg: 'bg-fuchsia-100',
        url: 'https://images.unsplash.com/photo-1517256673644-36ad11246d21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        para: 'First Assets has been a game-changer for me in the real estate market. Their dedicated team of brokers provided invaluable insights and guidance throughout the entire process. Thanks to their expertise, I found the perfect property that exceeded my expectations.',
        name: 'Sarah Marccello',
        email: 'SarahmarceelAgmail.com'

    },
    {
        id: 4,
        bg: 'bg-purple-100',
        url: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        para: 'First Assets has been a game-changer for me in the real estate market. Their dedicated team of brokers provided invaluable insights and guidance throughout the entire process. Thanks to their expertise, I found the perfect property that exceeded my expectations.',
        name: 'Sarah Marccello',
        email: 'SarahmarceelAgmail.com'

    },
    {
        id: 5,
        bg: 'bg-blue-100',
        url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        para: 'First Assets has been a game-changer for me in the real estate market. Their dedicated team of brokers provided invaluable insights and guidance throughout the entire process. Thanks to their expertise, I found the perfect property that exceeded my expectations.',
        name: 'Sarah Marccello',
        email: 'SarahmarceelAgmail.com'

    },
    {
        id: 6,
        bg: 'bg-cyan-100',
        url: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        para: 'Fof brokers provided invaluable insights and guidance throughout the entire process. Thanks to their expertise, I found the perfect property that exceeded my expectations.',
        name: 'Sarah Marccello',
        email: 'SarahmarceelAgmail.com'

    },
    {
        id: 7,
        bg: 'bg-violet-100',
        url: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        para: 'First Assets has been a game-changer for me in the real estate market. Their dedicated team of brokers provided invaluable insights and guidance throughout the entire process. Thanks to their expertise, I found the perfect property that exceeded my expectations.',
        name: 'Sarah Marccello',
        email: 'SarahmarceelAgmail.com'

    }
]

const TestmonialCradflipEffect = () => {
    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="w-[260px] h-[400px] md:w-[350px] md:h-[500px]"
            >
                {
                    testmonialData.map((items) => {
                        return <SwiperSlide key={items.id} className={`${items.bg} rounded-2xl`}  >
                            <div className="w-[100px] h-[100px] md:w-[180px] md:h-[180px] relative rounded-full overflow-hidden m-auto mt-7 object-cover">
                                <Image src={items.url}
                                    alt="testimonial people"
                                    fill={true}
                                    style={{ objectFit: "cover" }}
                                    loading="lazy"
                                />
                            </div>
                            <div className="m-auto p-5">
                                <p className="text-sm md:text-md lg:text-[18px] italic font-semibold text-slate-800 text-center">{items.para}</p>
                                <h4 className="uppercase text-xl font-bold pt-4 text-center text-teal-900">{items.name}</h4>
                                <p className="text-md md:text-lg  text-slate-800 italic text-center">Sarahm@gmail.com</p>
                            </div>
                        </SwiperSlide>
                    })
                }


            </Swiper>
        </>
    )
}

export default TestmonialCradflipEffect