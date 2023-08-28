"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import style from './PreLoader.module.css'
import Image from 'next/image';

const PreLoader = () => {

    return (
        <div className={style.main}>
            <div className={style.mainp}>
                <div className={style.top}>
                    <h1 className={style.toph1}>FIRST/ASSET</h1>
                </div>
                <div className={style.center}>
                    <div className={style.content}>
                        <div className='w-[20%] h-[20%] relative'>
                            <Image src='/assets/logo.jpg'
                                alt="logo first asset"
                                fill={true}
                            />
                        </div>
                    </div>
                </div>
                <div className={style.bottom}>
                    <h1 className={style.bottomh1}>FIRST/ASSET</h1>
                </div>
            </div>
        </div>
    )
}

export default PreLoader