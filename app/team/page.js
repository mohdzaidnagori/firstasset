import Image from 'next/image'
import React from 'react'


const Team = () => {
    return (
        <section className=''>
            <div className="flex justify-center items-center">
                <div className='lg:w-[70%] md:py-28 sm:p-8 p-5 text-center'>
                    <h2 className='text-3xl md:text-6xl font-semibold py-5'>Who We Are</h2>
                    <p className='text-xl py-3'>We are a Team of seasoned professionals, across Real Estate, Wealth
                        Management, Asset Management, Investment Banking & Capital Markets and are
                        ambitious about what we can do and the impact we can make.</p>
                    <p className='text-xl py-3'>FIRST/ASSET is a hard-working and driven workplace; a fast-growing, dynamic
                        environment ideal to take on challenges, yet at the same time, satisfying that urge
                        we all have to make a real impact in others people’s lives through our work.</p>
                    <p className='text-xl py-3'>Our exceptional, diverse experiences combine vast business knowledge, working in
                        partnership with our clients to develop and manage strategies, develop new
                        alternative products, and design and deliver complex capital transactions.</p>
                    <p className='text-xl py-3'>Our people are passionate about our corporate purpose and values. At
                        FIRST/ASSET , we believe in long-term relationships with our partners, and are
                        committed to our clients’ lasting success.</p>
                    <h5 className='font-semibold text-2xl pt-5'>We are “Professional Entrepreneurs with a Financial Soul”</h5>
                </div>
            </div>
            <div className='lg:grid grid-cols-2 gap-20 lg:px-44 items-center w-full lg:py-20  text-white bg-neutral-800'>

                <div className="flex justify-center flex-col items-center  border-teal-200 lg:border-2  p-10 rounded-tr-[60px] rounded-bl-[60px]">
                    <div className='w-[150px] h-[150px] rounded-tr-[30px] rounded-bl-[30px] relative overflow-hidden'>
                        <Image src="/assets/aasu.jpeg"
                            fill={true}
                            alt="ceo icon"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <h4 className='py-2 pt-4 text-2xl font-semibold uppercase text-teal-500'>Ashirwad Pareek</h4>
                    <h5 className='text-xl font-semibold'>MD & Co-Founder</h5>
                    <p className='lg:px-5 text-lg italic text-center'>Ashirwad (Ashu) is an Almunus of Indian Institute of
                        Technology (IIT Bombay). A seasoned Real Estate
                        professional with over 25 years of hands on experience.
                        He leads overall strategy and business. Ashu also brings in
                        strong expertise in PropTech along with his years of
                        experience in E Commerce and StartUps</p>
                </div>


                <div className="flex justify-center flex-col items-center border-teal-200 lg:border-2  p-10 rounded-tr-[60px] rounded-bl-[60px]">
                    <div className='w-[150px] h-[150px] rounded-tr-[30px] rounded-bl-[30px] relative overflow-hidden'>
                        <Image src="/assets/aasu1.jpeg"
                            fill={true}
                            alt="ceo icon"
                            style={{ objectFit: 'cover' }}
                            loading='lazy'
                        />
                    </div>
                    <h4 className='py-2 pt-4 text-2xl font-semibold uppercase text-teal-500'>Akhilesh K Singh</h4>
                    <h5 className='text-xl font-semibold'>MD & Co-Founder</h5>
                    <p className='lg:px-5 text-lg italic text-center'>Akhilesh is a Management Graduate with a rich and varied experience of over 30 years, Capital Markets, Investment Banking, NBFCs, Asset Management, Investment Management and Real Estate.
                        He has lead many companies as CEO / CXO, that include , Future Capital-Centrum, Birla Capital, Emkay Global, etc.</p>
                </div>

            </div>
            <div className='lg:h-screen md:h-[80vh] sm:h-[60vh] h-[50vh] w-full relative'>
                <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    fill={true}
                    loading='lazy'
                    style={{ objectFit: 'cover' }}
                    alt='ceo meet'
                />
            </div>
        </section>
    )
}

export default Team