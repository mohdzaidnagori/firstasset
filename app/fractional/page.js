import Image from 'next/image'
import React from 'react'
import ProjectCard from '../../components/projectChild/ProjectCard'
import Brands from '../../components/swiper/Brands'

const Fractional = () => {
    return (
        <div>
            <div className='flex justify-center lg:my-10'>
                <div className='text-left md:text-center py-10 px-10 lg:px-0 md:py-10 md:w-[70%]'>
                    <h2 className='text-2xl md:text-4xl font-semibold'>A FIRSTCAPITAL FINANCIAL GROUP VENTURE</h2>
                    <p className='text-gray-500 sm:text-xl text-lg py-5'>FIRST/ASSET with immense experience of its team comprising veteran IIT/MBA grads in due diligence and
                        real estate micro market intelligence&#44; uses cutting edge technology in bringing high-quality Pre-Leased
                        Commercial Real Estate Investment opportunities through Fractional Ownership across geographies to the
                        investors and help them generate high rental incomes along with handsome capital appreciation.</p>
                </div>
            </div>
            <div>
                <h2 className='text-center text-2xl md:text-4xl font-semibold uppercase my-10'>Invest Across Spectrum</h2>
                <div className='lg:flex'>
                    <div className='lg:w-[40%]  lg:h-[70vh] py-10 lg:py-0'>
                        <div className='h-full flex flex-col justify-center md:pl-10 px-4'>
                            <h3 className='md:text-5xl sm:text-3xl text-2xl uppercase font-semibold'>For <span className='text-teal-500'>Office Spaces</span> </h3>
                            <div className='flex mt-5 gap-4'>
                                <span className='bg-black w-[10%] h-2 mt-1.5'></span> <p className='text-black sm:text-xl text-base w-[90%]'>
                                    Invest into Grade A commercial
                                    offices with large Corporates
                                    and MNC tenants.
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
                            <h3 className='md:text-5xl sm:text-3xl text-2xl uppercase font-semibold'>For <span className='text-teal-500'>Warehouses</span> </h3>
                            <div className='flex mt-5 gap-4'>
                                <span className='bg-black w-[10%] h-2 mt-1.5'></span> <p className='text-black sm:text-xl text-base w-[90%]'>
                                    Invest in promising components
                                    of the ever-growing Logistics &amp;
                                    Warehousing opportunity.
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
                            <h3 className='md:text-5xl sm:text-3xl text-2xl uppercase font-semibold'>For <span className='text-teal-500'>Retail</span> </h3>
                            <div className='flex mt-5 gap-4'>
                                <span className='bg-black w-[10%] h-2 mt-1.5'></span> <p className='text-black sm:text-xl text-base w-[90%]'>
                                    Invest in High Street properties
                                    that offer a fantastic yield and
                                    long-term capital appreciation.
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
            <div className='md:my-20 my-16'>
                <h2 className='text-center text-2xl md:text-4xl font-semibold uppercase mb-16'>Ticket size starts from 10 Cr</h2>
                <div className='grid md:grid-cols-2 gap-10'>
                    <div className='p-5 lg:px-20'>
                        <p className='text-black text-xl'>These investments deliver regular rental returns (7-10%) to the investor that are way superior to other Fixed
                            Income alternatives such as Fixed Deposits&#44; Bonds etc.&#44; coupled with attractive capital appreciation (8-10%) in
                            the long-term resulting in an IRR of 15-20%. Rental payments are secured by long leave and license agreements
                            that have a lock-in of 3-5 years.</p>
                    </div>
                    <div>
                        <div className='w-[90%] sm:w-full h-[500px] relative'>
                            <Image src='/assets/spv.png'
                                fill={true}
                                loading='lazy'
                                style={{ objectFit: 'fill' }}
                                alt="logo first asset" />
                        </div>
                    </div>
                </div>
            </div>
            <section className='bg-gray-200 py-20'>
                <ProjectCard />
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