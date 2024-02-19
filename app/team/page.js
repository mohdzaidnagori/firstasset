import Image from 'next/image'
import React from 'react'


const Team = () => {
    const advisor = [
        {
            name: 'Mr. Ravinder Babbar',
            img: 1,
            title: 'Real Estate Veteran & Entrepreneur',
            desc: 'A tenured Real Estate professional with over 40 years of experience dedicated to the Real Estate Industry having delivered and managed over 17 Million sq. ft., worked with premier Real Estate developers and Transnational Business Houses across India, Nepal, UK. In his last assignment, he setup and headed the Real Estate division for the Hinduja Group as it’s CEO. He has also been instrumental in formulating the Real Estate Policy and Bye Laws for the Govt. of Nepal.'
        },
        {
            name: 'Ms. Sunita Goenka',
            img: 2,
            title: 'Dynamix Group / Goenka Trusts',
            desc: 'Ms. Sunita Goenka is part of the Dynamix Group, one of the leading real estate developers in western India. The Group has delivered many landmark projects, admeasuring, millions of square feet. Sunita Goenka is also the Managing Trustee of the Goenka and Associates Educational Trust (GAET). She has led the trust to develop and operate 11 world-class educational institutes in Mumbai and Thane which impart quality education to over 22,000 students.'
        },
        {
            name: 'Mr. Amit Shah',
            img: 3,
            title: 'Co-Founder IIFL Wealth & Wylth',
            desc: 'An accomplished financial services professional, that includes his current role as Founder & CEO of Wylth® and his past role as the Co-Founder and former Executive Director of Mumbai-headquartered IIFL Wealth Management — one of India’s largest wealth and asset management firms with a footprint in 20+ locations in India and eight cities globally. Amit received the "NRI of the Year" award in 2016 for the Asia Pacific region; and also the Udyog Rattan Award, for their exceptional contribution to the country’s economic development.'
        },
        {
            name: 'Mr.Pradeep Gupta',
            img: 4,
            title: 'CEO - Hinduja Bank',
            desc: 'Mr. Gupta is a seasoned senior banker and is currently the CEO of Hinduja Bank, ME. In the past he has held several leadership roles in Business Development & operations areas in India and UAE with over 30 years of banking experience across Private banking, Wealth Management, Corporate advisory, Retail banking ,NRI business and Structured financing solutions. He is a management graduate from Alliance Manchester Business School.'
        },
        {
            name: 'Prof. Dr. Sanjiv Parashar',
            img: 5,
            title: 'IIM Raipur',
            desc: 'Dr Parashar is a Professor and Dean with Indian Institute of Management, Raipur, India. He has thirty-two years’ academic experience including, corporate training and consulting. He has published numerous research papers in prominent international journals and his case studies are available at Harvard Business Publishing. He is extensively travelled globally and has also been a Visiting Fellow at University of Kelaniya, Sri Lanka and is also currently mentoring startups and entrepreneurs.'
        },
        {
            name: 'Maj. General Sandeepan Handa (Rtd.)',
            img: 6,
            title: '',
            desc: 'Maj Gen Sandeepan Handa had a stellar career in the Indian Army. He has 38 years of wide ranging experience in Defence Diplomacy and Defence Cooperation in international environment, Operations, Techno-Logistics and Procurements in the Defence Aviation; Planning and Execution of Military Operations and Operational Logistics. For an overall career of achievement and excellence in the India Army, he has been awarded Param Vishishth Seva Medal (PVSM) by President of India.'
        },
        {
            name: 'Mr. Ambar Prakash',
            img: 7,
            title: 'Founder - Rare Breed Company',
            desc: 'A global Advertising, Communications & Branding professional. He has won numerous awards at both National and International advertising and Film festivals. Ambar has the distinction of working at reputed MNC agencies, viz. BBDO, TBWA, DDB, Hakuhodo and helming Grey, Sri Lanka. He has contributed to the success of some of the biggest Real Estate brands in the country, viz. Lodha, Rustomjee, Ozone, Brigade, RMZ Group and Godrej to name a few. He represents Asia at Latin American board of directors for Advertising: Bendita Carpeta and India at Mad Stars, South Korea and also serves on the advisory boards of Startups.'
        },
        {
            name: 'Ms. Shashi Singh ',
            img: 8,
            title: 'CBO - Singularity AMC',
            desc: 'Ms. Singh, brings in a unique experience in leading and setting up Asset Management / Alternate Investments / Private Equity, businesses from scratch both onshore and offshore. Diverse experience across Business Development, Sales, Strategy, Products, Marketing,Business Processes. Successful track record in building strong teams, stronger relationships, business processes, digitization, and sustainable growth drivers. Has been associated with Aditya Birla Group, ICICI Prudential, Reliance, etc. She has been ranked amongst Top 100 women in Finance in India. '
        },
        {
            name: 'Mr. Manish Parashar',
            img: 9,
            title: 'Founder Amal Social - UAE',
            desc: 'A B2B Enterprise leader with 30 years of experience covering India, Middle East and Africa. First hand working experience of eCommerce, Real estate, cloud solutions, online security and encryption products. He has launched Sharaf DG retail, Duty Free operations and eCommerce. Built and launched ( Amal Social ) a start up in 2022 which was showcased at Expo 2020. Amal Social is primarily focused on smart living. An AI powered SaaS platform for smart cities and smarter living enabling Information, Interactivity, and Intelligence. '
        },
    ]
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
                        He leads overall strategy and business. <br /> Ashu also brings in
                        strong expertise in PropTech along with his years of
                        experience in E Commerce and <br /> Start-ups. His deep rooted understanding of concepttualising real estate projects right from the scratch, adds significant value to the developers and end users.</p>
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
            <div className='md:p-20'>
                <h1 className='text-xl md:text-5xl font-semibold capitalize text-center md:pb-20'>Advisory board</h1>
                <div className='grid md:grid-cols-3 gap-10 grid-cols-1'>
                    {
                        advisor?.map((advisor,index) => {
                            return (
                                <div key={advisor.img} className="md:h-[500px] bg-white flex justify-center flex-col items-center border-teal-200 lg:border-2  p-2 rounded-tr-[60px] rounded-bl-[60px]">
                                    <div className={`w-[140px] h-[170px]  rounded-tr-[30px] rounded-bl-[30px] relative overflow-hidden`}>
                                        <Image src={`/assets/men${advisor?.img}.png`}
                                            alt="ceo icon"
                                            fill={true}
                                            style={{ objectFit: 'cover', }}
                                            loading='lazy'
                                        />
                                    </div>
                                    <h4 className='py-2 pt-4 text-xl font-semibold uppercase text-teal-500'>{advisor?.name}</h4>
                                    <h5 className='text-lg font-semibold text-center'>{advisor?.title}</h5>
                                    <p className='md:px-5 px-2 text-[14px] text-center'>{advisor?.desc}</p>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </section>
    )
}

export default Team