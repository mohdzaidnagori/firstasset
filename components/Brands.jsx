import Image from 'next/image'
import React from 'react'

const Brands = () => {
    return (
        <div className=' flex items-center justify-center gap-5 lg:gap-10 py-10 lg:py-20'>
            <div className='rounded-full w-[50px] h-[50px] lg:w-[150px] lg:h-[150px] relative overflow-hidden'>
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
            </div>
        </div>
    )
}

export default Brands