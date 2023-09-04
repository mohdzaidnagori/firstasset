'use client'
import React from 'react'
import style from './TypeCards.module.css'

const TypeCardsproperty = ({ paragraph, heading }) => {

    return (
        <div className={`${style.card}  w-[280px] md:w-[400px] md:h-[200px] h-[200px]`}>
            <div className={style.cardInner}> 
                <div className={`${style.cardFront} bg-[url('/assets/icons-bg.jpg')] bg-no-repeat bg-center bg-cover relative overflow-hidden`}>
                    <div className='absolute inset-0 flex justify-center items-center'>
                        <div className='p-3 text-black text-2xl md:text-3xl text-center'>
                            <p>{paragraph}</p>
                        </div>
                    </div>
                </div>
                <div className={`${style.cardBack} bg-[url('/assets/icons-bg.jpg')] bg-no-repeat bg-center bg-cover relative overflow-hidden`}>
                    <div className='absolute inset-0 flex justify-center items-center flex-col'>
                        <h3 className='md:text-xl text-base font-bold uppercase'>{heading}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TypeCardsproperty