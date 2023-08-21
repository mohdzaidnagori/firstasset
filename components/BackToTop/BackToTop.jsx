'use client'
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'


const BackToTop = () => {
    const [VisibleBackToTopButton, setVisibleBackToTopButton] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setVisibleBackToTopButton(true);
            } else {
                setVisibleBackToTopButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
 

    return (
        <>
            {
                VisibleBackToTopButton &&
                <>
                    <button onClick={scrollToTop} className='bg-teal-500 outline-none border-2 grid place-items-center border-white w-[50px] h-[50px] rounded-full fixed bottom-10 md:bottom-5 right-5 z-50'>
                        <AiOutlineArrowUp className='text-white text-xl' />
                    </button>
                </>
            }
        </>

    )
}

export default BackToTop