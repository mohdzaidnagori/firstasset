import Image from 'next/image'
import React from 'react'
import Banner from '../../components/swiper/homeBanner/Banner'
import Coverflows from '../../components/swiper/Coverflows'

const Sole = () => {
  return (
    <div>
      <div className='text-center sm:px-4 lg:px-0 md:py-10 flex justify-center items-center flex-col'>
        <h2 className='text-2xl md:text-5xl font-semibold capitalize'>Mandated Projects</h2>
        <p className='text-gray-500 sm:text-xl text-lg py-5 max-w-[991px]'>With a commitment to quality and excellence, our curated real estate projects bring your dream of a luxurious lifestyle to life. Elevate your expectations and experience living at its finest. Welcome to a world where every aspect of your living space is a testament to refinement and sophistication.</p>
      </div>
      <div className='lg:flex bg-gray-100'>
        <div className='lg:w-[40%]  lg:h-screen py-10 lg:py-0'>
          <div className='h-full flex flex-col justify-center md:pl-10 px-4'>
            <h3 className='md:text-5xl sm:text-3xl text-2xl uppercase font-semibold'>For <span className='text-teal-500'>Developers</span> </h3>
            <div className='flex mt-5 gap-4 flex-col'>
              <span className='bg-black w-[10%] h-2 mt-1.5'></span> <p className='text-black sm:text-xl text-base w-[90%]'>From a developers perspective, the
                {`exclusive mandate ensures that a single
                brokerage firm, like FIRST/ASSET, is solely
                responsible for advertising and selling all
                units in a project. This simplifies
                management, reduces costs associated
                with marketing and advertising, and
                ensures consistency in pricing across all
                units. By working with FIRST/ASSET,
                developers can also leverage the firm's
                expertise in the market.`}
              </p>
              <p className='text-black sm:text-xl text-base font-semibold'>Our Services Include:</p>
              <p className='text-black sm:text-xl text-base w-[90%]'>&#8226; Strategic Marketing &#8226; Targeted Outreach &#8226; Comprehensive Market Analysis &#8226; Customized Sales Strategy 
                  &#8226; Branding and Positioning &#8226; Virtual Tours and 3D Visualization &#8226; Buyer Relationship Management &#8226; Sales Team Training &#8226; Legal Documentation &#8226; Performance Tracking</p>
            </div>
          </div>
        </div>
        <div className='lg:w-[60%] h-[50vh] lg:h-screen relative lg:flex'>
          <div className="lg:w-[50%] hidden lg:block" />
          <div className="bg-teal-500 w-[50%] h-full rounded-l-[2rem] overflow-hidden" />
          <div className='absolute lg:inset-[90px] inset-7 rounded-[2rem] overflow-hidden'>
            <Image src="/assets/Developers.png"
              alt="sole landing page image"
              fill={true}
              loading='lazy'
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
      <div className='lg:flex bg-gray-100'>


        <div className='lg:w-[40%] h-[50%] lg:h-screen order-1 md:order-2 py-10 lg:py-0'>
          <div className='h-full flex flex-col justify-center md:pl-10 px-4'>
            <h3 className='md:text-5xl sm:text-3xl text-2xl uppercase font-semibold'>For <span className='text-teal-500'>Homebuyers</span> </h3>
            <div className='flex mt-5 gap-4 flex-col'>
              <span className='bg-black w-[10%] h-2 mt-1.5'></span> <p className='text-black sm:text-xl text-base w-[90%]'>
                For homebuyers, mandated sole selling of
                residential projects offers numerous
                advantages that can make the purchasing
                process more streamlined and less
                burdensome. By working with a brokerage
                firm like FIRST/ASSET that has exclusive
                selling rights, buyers can receive tailored and
                focused assistance in their search for a new
                home. FIRST/ASSET will be able to answer
                all their questions, provide insights on
                different units, and facilitate the purchase
                process, including financing.</p>
                <p className='text-black sm:text-xl text-base font-semibold'>Our Services Include:</p>
                <p className='text-black sm:text-xl text-base w-[90%]'>
                &#8226; Personalized Consultation
                &#8226; Access to Exclusive Listings
                &#8226; Comprehensive Due Diligence
                &#8226; Customized Financing Solutions
                &#8226; Post-Purchase Support
                &#8226; Bespoke Property Tours
                &#8226; Priority Investment Opportunities
                &#8226; Preferred Financing Partners
                &#8226; Exclusive Events
                &#8226; Streamlined Documentation
                </p>
               

            </div>
          </div>
        </div>
        <div className='lg:w-[60%] h-[50vh] lg:h-screen relative lg:flex order-2 md:order-1'>
          <div className="bg-teal-500 w-[50%] h-full rounded-r-[2rem] overflow-hidden" />
          <div className="lg:w-[50%] hidden lg:block" />
          <div className='absolute lg:inset-[90px] inset-7 rounded-[2rem] overflow-hidden'>
            <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
              alt="sole landing page image"
              fill={true}
              loading='lazy'
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
      <section className="relative w-full bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-no-repeat">
        <div className="bg-slate-900/60 m-auto">
          <div className="text-center pt-5">
            <h3 className="text-2xl lg:text-3xl text-white font-semibold">Mandated Projects</h3>
            <p className="lg:text-xl md:texl-lg text-gray-100 mt-2 px-2">Discover the most premium, yet affordable, real estate projects - both residential & commercial</p>
          </div>
          <Coverflows />
        </div>
      </section>
    </div>
  )
}

export default Sole