'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

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
    const emailHandle = () => {
        const email = 'zaidnagori009@gmail.com'; // Replace with the recipient's email
        const subject = encodeURIComponent('Your Subject Here');
        const body = encodeURIComponent('Your Message Here');
      
        const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
        window.open(mailtoLink)
    }
    
    return (
        <>
            {
                VisibleBackToTopButton &&
                <>
                    <button onClick={scrollToTop} className='bg-teal-500 outline-none border-2 grid place-items-center border-white w-[50px] h-[50px] rounded-full fixed bottom-10 md:bottom-5 right-5 z-50'>
                        <AiOutlineArrowUp className='text-white text-xl' />
                    </button>
                    <button onClick={emailHandle}  className='bg-teal-500 outline-none border-2 grid place-items-center border-white w-[50px] h-[50px] rounded-full fixed bottom-10 md:bottom-20 right-5 z-50'>
                        <MdEmail className='text-white text-xl' />
                    </button>
                </>
            }
        </>

    )
}

export default BackToTop