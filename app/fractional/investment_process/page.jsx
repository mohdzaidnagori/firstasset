import React from 'react'
import style from '../../../components/projectChild/ProjectCard.module.css'
import ProjectCard from '../../../components/projectChild/ProjectCard'
import TextReveal from '../../../components/fadeinout/TextReveal'
import { GrAnalytics, GrDomain, GrHomeRounded } from 'react-icons/gr'
import ThumbsSwiper from '../../../components/swiper/ThumbsSwiper'
import Image from 'next/image'
import ProjectTimeline from '../../../components/projectManagment/ProjectTimeline'
import { data3 } from '../../../constants/projectTimeline'

const Fractionali = () => {
    return (
        <div>
            <div className='flex justify-center py-2 items-center bg-white flex-col'>
            <h3 className='text-center ttext-2xl md:text-5xl font-semibold capitalize pt-10'>Investment Process</h3>
                 <div className='md:py-6 md:pb-14 pb-10 md:w-[70%] w-[90%]'>
                        <p className='md:text-xl text-lg font-medium  text-black text-center'>
                        {
                            `FIRST/ASSET’s tech enabled platform handles the entire life cycle of the property
                            including identification, acquisition, asset management (Lease Negotiation &amp;
                            Management and Asset Maintenance) &amp; eventual sale (Asset Valuation &amp; Sale
                            Negotiations).`
                        }
                    </p>
                </div>
            </div>
            <section className='bg-gray-100'>
                <ProjectTimeline data={data3}
                    h1='Platform n Process'
                    h2=''
                />
            </section>
           
           
            <section className="h-[1300px] md:h-[1000px] lg:h-[800px] relative w-full">
                <div className="absolute inset-0 z-0">
                    <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="real estate building"
                        fill={true}
                        loading="lazy"
                    />
                </div>
                <div className="absolute inset-0  bg-black/60  flex flex-col lg:flex-row">
                    <div className="h-[35%] md:h-[40%] lg:h-full lg:w-1/2 relative">
                        <div className="flex justify-center flex-col h-full px-10">
                            <h3 className="md:text-4xl text-3xl lg:text-5xl font-semibold text-white py-1">Invest in Grade A Commercial Properties</h3>
                            <h3 className="md:text-4xl text-3xl lg:text-5xl font-semibold text-white py-3">Fractional Ownership / Preleased</h3>
                            <p className="md:text-lg text-white text-md lg:text-xl">Unlock the world of Grade A commercial real estate with FIRST/ASSET Fractional Property Management services. Experience the epitome of exclusivity and flexibility in your real estate investments. With our expert team, we provide a hassle-free solution for fractional ownership, allowing you to own a share of prestigious properties around the globe</p>
                        </div>
                    </div>
                    <div className="lg:h-full h-[65%] md:h-[60%] lg:w-1/2 relative">
                        <div className="lg:my-10 lg:rounded-tl-[40px] lg:rounded-bl-[40px] overflow-hidden bg-white absolute inset-0 md:[70%]">
                            <div className="relative w-full h-full lg:p-4 p-2">
                                <ThumbsSwiper />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-gray-200 py-20'>
                <div className='grid place-items-center'>
                    <ul className={`${style.ui} grid md:grid-cols-3 grid-cols-1`}>
                        <ProjectCard icon={<GrHomeRounded />} color='#16a34a' heading='Fractional Home' link='fractional' />
                        <ProjectCard icon={<GrAnalytics />} color='#3b82f6' heading='Structure of Investment' link='fractional/structure_investment' />
                        <ProjectCard icon={<GrDomain />} color='#e11d48' heading='Why FIRST/ASSET' link='fractional/why_first_asset' />
                    </ul>
                </div>

            </section>
        </div>
    )
}

export default Fractionali