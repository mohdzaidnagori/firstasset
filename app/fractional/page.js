import Image from 'next/image'
import React from 'react'
import ProjectCard from '../../components/projectChild/ProjectCard'
import Brands from '../../components/swiper/Brands'
import ProjectTimeline from '../../components/projectManagment/ProjectTimeline'
import { data2 } from '../../constants/projectTimeline'
import ThumbsSwiper from '../../components/swiper/ThumbsSwiper'
import style from '../../components/projectChild/ProjectCard.module.css'
import { GrAnalytics, GrDomain, GrHost, GrStatusUnknown } from 'react-icons/gr'


const Fractional = () => {
    return (
        <div>
            <div className='flex justify-center lg:my-5'>
                <div className='text-left md:text-center py-10 px-10 lg:px-0 md:py-10 md:w-[70%]'>
                    <h2 className='text-2xl md:text-5xl font-semibold capitalize'>A FirstCapital Financial Group Venture</h2>
                    <p className='text-gray-500 sm:text-xl text-lg py-5'>FIRST/ASSET with more than 100 years of exprience of its core team in due diligence and
                        real estate micro market intelligence&#44; uses cutting edge technology in bringing high-quality Pre-Leased
                        Commercial Real Estate Investment opportunities through Fractional Ownership across geographies to the
                        investors and help them generate high rental incomes along with handsome capital appreciation.</p>
                    <p className='text-gray-500 sm:text-xl text-lg py-5'>These investments deliver regular rental returns (7-10%) to the investor that are way superior to other Fixed Income alternatives such as Fixed Deposits, Bonds etc., coupled with attractive capital appreciation (8-10%) in the long-term resulting in an IRR of 15-20%. Rental payments are secured by long leave and license agreements that have a lock-in of 3-5 years.</p>
                </div>
            </div>
            <section className='bg-gray-100'>
                <ProjectTimeline data={data2}
                    h1='Key features of fractional real estate investment'
                    h2=''
                />
            </section>
            <div>
                <h2 className='text-center text-2xl md:text-4xl font-semibold my-10'>Invest Across Spectrum</h2>
                <div className='lg:flex'>
                    <div className='lg:w-[40%]  lg:h-[70vh] py-10 lg:py-0'>
                        <div className='h-full flex flex-col justify-center md:pl-10 px-4'>
                            <h3 className='md:text-5xl sm:text-3xl text-2xl uppercase font-semibold'><span className='text-teal-500'>Office Spaces</span> </h3>
                            <div className='flex mt-5 gap-4'>
                                <span className='bg-black w-[10%] h-2 mt-1.5'></span> <p className='text-black sm:text-xl text-base w-[90%]'>
                                    The office market in India has been experiencing major growth driven by the increasing demand for office spaces. Long-term prospects for this market remain positive, ensuring a buoyant leasing market, with consistently attractive rental yields and capital appreciation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[60%] h-[50vh] lg:h-[70vh] relative lg:flex'>
                        <div className="lg:w-[50%] hidden lg:block" />
                        <div className="bg-teal-500 w-[50%] h-full" />
                        <div className='absolute lg:inset-[90px] inset-7'>
                            <Image src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="sole landing page image"
                                fill={true}
                                loading='lazy'
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>

                <div className='lg:flex'>


                    <div className='lg:w-[40%] h-[50%] lg:h-[70vh] order-1 md:order-2 py-10 lg:py-0'>
                        <div className='h-full flex flex-col justify-center md:pl-10 px-4'>
                            <h3 className='md:text-5xl sm:text-3xl text-2xl uppercase font-semibold'><span className='text-teal-500'>Warehouses</span> </h3>
                            <div className='flex mt-5 gap-4'>
                                <span className='bg-black w-[10%] h-2 mt-1.5'></span> <p className='text-black sm:text-xl text-base w-[90%]'>
                                    Warehouse market in India has rapidly grown due to increased demand for efficient storage and logistics solutions. It&apos;s driven by factors like the growth of e-commerce and need for better supply chain management. The introduction of GST has led to further advancement & consolidation of warehousing facilities.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[60%] h-[50vh] lg:h-[70vh] relative lg:flex order-2 md:order-1'>
                        <div className="bg-teal-500 w-[50%] h-full" />
                        <div className="lg:w-[50%] hidden lg:block" />
                        <div className='absolute lg:inset-[90px] inset-7'>
                            <Image src="https://plus.unsplash.com/premium_photo-1663040001568-f07cab70d71f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt="sole landing page image"
                                fill={true}
                                loading='lazy'
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
                <div className='lg:flex'>
                    <div className='lg:w-[40%]  lg:h-[70vh] py-10 lg:py-0'>
                        <div className='h-full flex flex-col justify-center md:pl-10 px-4'>
                            <h3 className='md:text-5xl sm:text-3xl text-2xl uppercase font-semibold'><span className='text-teal-500'>Retail</span> </h3>
                            <div className='flex mt-5 gap-4'>
                                <span className='bg-black w-[10%] h-2 mt-1.5'></span> <p className='text-black sm:text-xl text-base w-[90%]'>
                                    India&apos;s retail market has been experiencing significant growth due to factors such as urbanization, a rising middle class, and increasing consumer spending. The country has been viewed as one of the most promising retail markets globally. It&apos;s characterized by a mix of traditional brick-and-mortar stores and an expanding e-commerce sector.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[60%] h-[50vh] lg:h-[70vh] relative lg:flex'>
                        <div className="lg:w-[50%] hidden lg:block" />
                        <div className="bg-teal-500 w-[50%] h-full" />
                        <div className='absolute lg:inset-[90px] inset-7'>
                            <Image src="https://images.unsplash.com/photo-1638969725799-40c112559cbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt="sole landing page image"
                                fill={true}
                                loading='lazy'
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ThumbsSwiper />
            <section className='bg-gray-100 py-20'>
                <div className='grid place-items-center'>
                    <ul className={`${style.ui} grid md:grid-cols-4 grid-cols-1 gap-4`}>
                        <ProjectCard icon={<GrAnalytics />} color='#3b82f6' heading='Investment Structure' link='fractional/structure_investment' />
                        <ProjectCard icon={<GrHost />} color='#16a34a' heading='Investment Process' link='fractional/investment_process' />
                        <ProjectCard icon={<GrDomain />} color='#e11d48' heading='Why First/Asset' link='fractional/why_first_asset' />
                        <ProjectCard icon={<GrStatusUnknown />} color='#ca8a04' heading='Faqs' link='/faqs' />
                    </ul>
                </div>

            </section>
            <section>
                <div className="text-center mt-10">
                    <h3 className="text-3xl lg:text-4xl font-semibold capitalize">
                        OUR ESTEEMED PARTNERS
                    </h3>
                </div>
                <Brands />
            </section>
        </div>
    )
}

export default Fractional