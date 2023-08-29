'use client'
import React from 'react'
import style from './TypeCards.module.css'
import Link from 'next/link'

const TypeCards = ({paragraph,url,heading}) => {
    return (
        <div className={`${style.card} w-[280px] md:w-[400px] md:h-[200px] h-[200px]`}>
            <div className={style.cardInner}>
                <div className={`${style.cardFront} bg-[url('/assets/icons-bg.jpg')] bg-no-repeat bg-center bg-cover relative overflow-hidden`}>
                    <div className='absolute inset-0'>
                        <div className='p-3 text-black xl:text-lg text-base'>
                            <p>{paragraph}</p>
                        </div>
                        <div className='absolute bottom-3 right-3'>
                            <h3 className='text-black xl:text-2xl text-xl uppercase'>{heading}</h3>
                        </div>
                    </div>
                </div>
                <div className={`${style.cardBack} bg-[url('/assets/icons-bg.jpg')] bg-no-repeat bg-center bg-cover relative overflow-hidden`}>
                    <div className='absolute inset-0 flex justify-center items-center flex-col'>
                        <h3 className='text-teal-500 xl:text-2xl text-xl lg:text-xl font-bold uppercase text-center'>{heading}</h3>
                        <Link href={url} className='text-black text-lg underline'>View More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TypeCards