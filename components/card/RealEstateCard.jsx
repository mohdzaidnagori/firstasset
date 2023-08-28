'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsBarChartSteps } from 'react-icons/bs'
import { TbRulerMeasure } from 'react-icons/tb'
import { FaIndianRupeeSign } from 'react-icons/fa'
import { BiBed, BiRupee } from 'react-icons/bi'
import { MdDateRange } from 'react-icons/md'


const RealEstateCard = ({ item }) => {
    const imageArray = JSON.parse(item.images)
    const monthAbbreviations = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateString = item.rera_date;
    const [day, month, year] = dateString.split("-").map(Number);

    const convertedDate = new Date(year, month - 1, day);
    const dateObject = new Date(convertedDate);
    const monthIndex = dateObject.getMonth();
    const monthAbbreviation = monthAbbreviations[monthIndex];
    const years = dateObject.getFullYear();
    
    console.log(`${monthAbbreviation} ${years}`);
    return (
        <div className="relative inline-block">
            <div className="shadow-2xl p-4 w-[300px] rounded-lg bg-white ">
                <div className="flex justify-center relative rounded-lg overflow-hidden h-44">
                    <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                        <div className={`absolute inset-0 bg-no-repeat bg-center bg-cover overflow-hidden opacity-100`}>
                            <Image fill={true}
                                sizes='100%'
                                src={`https://skilliza.com/wscubetech/public/images/${imageArray[0]}`}
                                alt='banner images' loading='lazy'
                                style={{ objectFit: 'fill' }} />
                        </div>
                    </div>
                    <div className="absolute flex justify-center bottom-0 mb-3">
                        <div className="relative flex bg-white px-4 py-1 space-x-5 rounded-lg  shadow">
                            <p className="group flex items-center justify-center gap-1.5 font-medium text-gray-800">
                                <span className="absolute z-[999] opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-[-40px] left-0 rounded-lg bg-white px-4 py-1 w-auto" >
                                    Price
                                </span>
                                <span><BiRupee /></span>
                                <span className='mt-1'>{item.price_range}</span>
                            </p>

                            
                            <p className="group flex items-center justify-center gap-1.5 font-medium text-gray-800">
                                <span className="absolute z-[999] opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-[-40px] left-0 rounded-lg bg-white px-4 py-1 w-auto" >
                                    Configration
                                </span>
                                <span><BiBed /></span>
                                <span className='mt-1'>{item.configration}</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <h2 className="font-medium text-base md:text-lg text-gray-800 line-clamp-1" title="New York">
                        {item.project_name}
                    </h2>
                    <p className="mt-2 text-sm text-gray-800 line-clamp-1" title="New York, NY 10004, United States">
                        {item.address}
                    </p>
                </div>

                <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
                    <p className="flex gap-2 items-center text-gray-800">
                        <span className=''><TbRulerMeasure /> </span>{item.carpet_area} sqft
                    </p>
                    <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">

                        <span className="mt-2 xl:mt-0 flex justify-center items-center gap-3">
                            <MdDateRange />
                            {monthAbbreviation} {years}
                        </span>
                    </p>
                    <p className="flex gap-2 items-center text-gray-800">
                        <span className=''><AiFillHome /> </span>{item.units} Units
                    </p>
                    <p className="flex gap-2 items-center text-gray-800">
                        <span className=''><BsBarChartSteps /> </span>{item.floor} Floors
                    </p>
                    
                </div>

                <div className="grid grid-cols-2 mt-8">
                    <div className="flex items-center">
                        <Link href={`project/sole_list/${item.id}`} className="ml-2 p-2 px-6 text-white rounded-full bg-teal-500 line-clamp-1">
                            View More
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <Link href={item.location_map} rel="noopener noreferrer" target="_blank" className="ml-2 p-2 px-6 text-white rounded-full bg-teal-500 line-clamp-1">
                            View Map
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RealEstateCard