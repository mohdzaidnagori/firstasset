import Image from 'next/image'
import React from 'react'


const Team = () => {
    return (
        <section className=''>
            <div className='flex justify-center lg:my-5'>
                <div className='text-left bg-white md:text-center py-10 px-10 lg:px-0 md:py-10 md:w-[70%]'>
                    <h2 className='text-2xl md:text-5xl font-semibold capitalize'>Who We Are</h2>
                    <p className='text-gray-500 sm:text-xl text-lg py-5'>
                        {
                            `We are a Team of seasoned professionals, across Real Estate, Property
                            Management, Asset Management, Investment Banking & Fractional Investments and are
                            ambitious about what we can do and the impact we can make.`
                        }
                    </p>
                    <p className='text-gray-500 sm:text-xl text-lg py-5'>
                        {
                            `FIRST/ASSET is a hard-working and driven workplace; a fast-growing, dynamic
                            environment ideal to take on challenges, yet at the same time, satisfying that urge
                            we all have to make a real impact in others people’s lives through our work.`
                        }
                    </p>
                    <p className='text-gray-500 sm:text-xl text-lg py-5'>
                        {
                            `Our exceptional, diverse experiences combine vast business knowledge, working in
                            partnership with our clients to develop and manage strategies, develop new
                            alternative products, and design and deliver complex capital transactions.`
                        }
                    </p>
                    <p className='text-gray-500 sm:text-xl text-lg py-5'>
                        {
                            `Our people are passionate about our corporate purpose and values. At
                            FIRST/ASSET , we believe in long-term relationships with our partners, and are
                            committed to our clients’ lasting success.`
                        }
                    </p>
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
                        He leads overall strategy and business. <br/> Ashu also brings in
                        strong expertise in PropTech along with his years of
                        experience in E Commerce and <br/> Start-ups. His deep rooted understanding of concepttualising real estate projects right from the scratch, adds significant value to the developers and end users.</p>
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
                        He has lead many companies as CEO / CXO, that include , Future Capital-Centrum, Birla Capital, Emkay Global, etc. Akhilesh brings with him a comprehesive understanding of the Equities market, more specifically, the derivatives strategy. he is also the cofounder of our Alternate Investment fund and FIRST/ASSET.</p>
                </div>

            </div>
            <div className='lg:h-screen md:h-[80vh] sm:h-[60vh] h-[50vh] w-full relative'>
                <Image src="/assets/Team.jpeg"
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