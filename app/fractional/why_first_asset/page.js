import React from 'react'
import InfograpicList from '../../../components/infograpicList/InfograpicList'
import style from '../../../components/projectChild/ProjectCard.module.css'
import ProjectCard from '../../../components/projectChild/ProjectCard'
import { GrAnalytics, GrHomeRounded, GrHost } from 'react-icons/gr'
import ThumbsSwiper from '../../../components/swiper/ThumbsSwiper'
import Image from 'next/image'

const Fractionalw = () => {

  const data = [
    {
      img: '"../../public/assets/icons/imageedit_2_5602005075.png"',
      title: 'END TO END',
      ptext: "FIRST/ASSET’s tech enabled platform handles the entire life cycle of the property including identification, identification, acquisition, asset management management (Lease Negotiation &amp; Management and Asset Maintenance) &amp; eventual sale (Asset Valuation &amp; Sale Negotiations).",
    },
    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title: 'RESEARCH DRIVEN',
      ptext: 'Research driven investment approach using quantitative analytics in Asset Identification via insights on properties, locations, pricing and building specifications.',
    },
    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title: 'RISK / DUE DILIGENCE',
      ptext: 'We follow an exhaustive selection process of both Asset and Occupier to mitigate any Asset related risks. Our legal &amp; valuation partners are the best in the industry.',
    },
    {
      img: '"../../public/assets/icons/bg-sidebar-desktop.svg"',
      title: 'EASE OF INVESTING',
      ptext: 'Invest in curated opportunities ONLINE (no physical paperwork) with complete documentation including Asset Registration, Document Safe keeping &amp; Document Digitalisation.',
    },
    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title: 'REPORTING/VALUATIONS',
      ptext: 'Post investment, we continue to make sure that the upkeep of the asset is looked after by our team, coupled with regular inspections. Periodic valuations and reporting keeps you updated on rental flows and capital appreciation.',
    },
    {
      img: '/assets/icons/bg-sidebar-desktop.svg',
      title: 'LIQUIDATION',
      ptext: 'Further, should you wish to liquidate your investments at some point, we help you find a buyer through a secondary sale, in the private market through our extensive network.',
    },
    {
      img: '/assets/icons/bg-sidebar-desktop.svg',
      title: 'CORPORATE GOVERNANCE',
      ptext: 'Streamlined investment process, with high level of corporate governance and disclosures.',
    },
  ];

  return (
    <div>
      <h3 className='capitalize text-center text-2xl md:text-5xl font-semibold py-10'>Why First/Asset</h3>
      <div className='px-6 sm:px-10 md:px-14 lg:px-40 text-xl text-black flex flex-col gap-10 my-10 mb-20'>
        <p>Real estate investments are long term commitments and herein comes into play the
          enormous experience of the FIRST/ASSET team. It undertakes the most rigorous and
          stringent Asset Selection Process. This mitigates all possible risks, yet keeping in mind the
          future asset growth, builds a solid investment Portfolio.</p>
        <p>The FIRST/ASSET founders have rich regulatory and real estate experience which
          clubbed with those of its esteemed and able Partners, that include Custodians, Trustees,
          Fund Accountants, Law Firms, Banks and IPC; are capable of delivering a superlative,
          comprehensive and seamless investment experience that is managed by reputed industry
          experts.</p>
      </div>
      <div className='my-10'>
        <h3 className='text-center text-2xl md:text-4xl font-semibold capitalize py-10'>Invest Across Spectrum</h3>
        <InfograpicList data={data} />
      </div>

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
            <ProjectCard icon={<GrHost />} color='#e11d48' heading='Investment Process' link='fractional/investment_process' />
          </ul>
        </div>

      </section>
    </div>
  )
}

export default Fractionalw