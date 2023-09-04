import React from 'react'
import style from '../../../components/projectChild/ProjectCard.module.css'
import ProjectCard from '../../../components/projectChild/ProjectCard'
import TextReveal from '../../../components/fadeinout/TextReveal'
import { GrAnalytics, GrDomain, GrHomeRounded, GrStatusUnknown } from 'react-icons/gr'
import ThumbsSwiper from '../../../components/swiper/ThumbsSwiper'
import Image from 'next/image'
import ProjectTimeline from '../../../components/projectManagment/ProjectTimeline'
import { data3 } from '../../../constants/projectTimeline'

const Fractionali = () => {
    return (
        <div>
            <div className='flex justify-center lg:my-5'>
                <div className='text-left bg-white md:text-center py-10 px-10 lg:px-0 md:py-10 md:w-[70%]'>
                    <h2 className='text-2xl md:text-5xl font-semibold capitalize'>Investment Process</h2>
                    <p className='text-gray-500 sm:text-xl text-lg pt-5'>
                        {
                            `FIRST/ASSET’s tech enabled platform handles the entire life cycle of the property
                            including identification, acquisition, asset management (Lease Negotiation &
                            Management and Asset Maintenance) & eventual sale (Asset Valuation & Sale
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


            <ThumbsSwiper />
            <section className='bg-gray-100 py-20'>
                <div className='grid place-items-center'>
                    <ul className={`${style.ui} grid lg:grid-cols-4 grid-cols-1 gap-4`}>
                        <ProjectCard icon={<GrHomeRounded />} color='#ec4899' heading='Fractional Home' link='fractional' />
                        <ProjectCard icon={<GrAnalytics />} color='#3b82f6' heading='Investment Structure' link='fractional/structure_investment' />
                        <ProjectCard icon={<GrDomain />} color='#e11d48' heading='Why FIRST/ASSET' link='fractional/why_first_asset' />
                        <ProjectCard icon={<GrStatusUnknown />} color='#ca8a04' heading='Faqs' link='/faqs' />
                    </ul>
                </div>

            </section>
        </div>
    )
}

export default Fractionali