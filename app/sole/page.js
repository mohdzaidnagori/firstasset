import Image from 'next/image'
import React from 'react'
import Banner from '../../components/swiper/homeBanner/Banner'

const Sole = () => {
  return (
    <div>
      <div className='text-center sm:px-4 lg:px-0 md:py-10'>
        <h2 className='text-3xl md:text-6xl font-semibold'>MANDATED SOLE SELLING</h2>
        <p className='text-gray-500 sm:text-xl text-lg py-5'>Mandated sole selling residential projects have numerous benefits for both developers and homebuyers.</p>
      </div>
      <div className='lg:flex'>
        <div className='lg:w-[40%]  lg:h-screen py-10 lg:py-0'>
          <div className='h-full flex flex-col justify-center md:pl-10 px-4'>
            <h3 className='md:text-5xl sm:text-3xl text-2xl uppercase font-semibold'>For <span className='text-teal-500'>Developer</span> </h3>
            <div className='flex mt-5 gap-4'>
              <span className='bg-black w-[10%] h-2 mt-1.5'></span> <p className='text-black sm:text-xl text-base w-[90%]'>From a developers perspective, the
                exclusive mandate ensures that a single
                brokerage firm, like FIRST/ASSET, is solely
                responsible for advertising and selling all
                units in a project. This simplifies
                management, reduces costs associated
                with marketing and advertising, and
                ensures consistency in pricing across all
                units. By working with FIRST/ASSET,
                developers can also leverage the firms
                expertise in the market.
              </p>
            </div>
          </div>
        </div>
        <div className='lg:w-[60%] h-[50vh] lg:h-screen relative lg:flex'>
          <div className="lg:w-[50%] hidden lg:block" />
          <div className="bg-teal-500 w-[50%] h-full" />
          <div className='absolute lg:inset-[90px] inset-7'>
            <Image src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="sole landing page image"
              fill={true}
              loading='lazy'
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
      <div className='lg:flex'>

        
        <div className='lg:w-[40%] h-[50%] lg:h-screen order-1 md:order-2 py-10 lg:py-0'>
          <div className='h-full flex flex-col justify-center md:pl-10 px-4'>
            <h3 className='md:text-5xl sm:text-3xl text-2xl uppercase font-semibold'>For <span className='text-teal-500'>Homebuyers</span> </h3>
            <div className='flex mt-5 gap-4'>
              <span className='bg-black w-[10%] h-2 mt-1.5'></span> <p className='text-black sm:text-xl text-base w-[90%]'>From a developers perspective, the
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
            </div>
          </div>
        </div>
        <div className='lg:w-[60%] h-[50vh] lg:h-screen relative lg:flex order-2 md:order-1'>
          <div className="bg-teal-500 w-[50%] h-full" />
          <div className="lg:w-[50%] hidden lg:block" />
          <div className='absolute lg:inset-[90px] inset-7'>
            <Image src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="sole landing page image"
              fill={true}
              loading='lazy'
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sole