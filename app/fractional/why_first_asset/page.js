import React from 'react'
import InfograpicList from '../../../components/infograpicList/InfograpicList'
import style from '../../../components/projectChild/ProjectCard.module.css'
import ProjectCard from '../../../components/projectChild/ProjectCard'
import { GrAnalytics, GrHomeRounded, GrHost, GrStatusUnknown } from 'react-icons/gr'
import ThumbsSwiper from '../../../components/swiper/ThumbsSwiper'
import Image from 'next/image'

const Fractionalw = () => {

  const data = [
    {
      img: '"../../public/assets/icons/imageedit_2_5602005075.png"',
      title: 'End-to-End',
      ptext: `FIRST/ASSET’s tech enabled platform handles the entire life cycle of the property including identification, acquisition, asset management (Lease Negotiation & Management and Asset Maintenance) & eventual sale (Asset Valuation & Sale Negotiations).`,
    },
    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title: 'Research Driven',
      ptext: 'Research driven investment approach using quantitative analytics in Asset Identification via insights on properties, locations, pricing and building specifications.',
    },
    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title: 'Risk / Due Diligence',
      ptext: `We follow an exhaustive selection process of both Asset and Occupier to mitigate any Asset related risks. Our legal & valuation partners are the best in the industry.`,
    },
    {
      img: '"../../public/assets/icons/bg-sidebar-desktop.svg"',
      title: 'Ease of Investing',
      ptext: 'Invest in curated opportunities ONLINE (no physical paperwork) with complete documentation including Asset Registration, Document Safe keeping & Document Digitalisation.',
    },
    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title: 'Reporting/Valuations',
      ptext: 'Post investment, we continue to make sure that the upkeep of the asset is looked after by our team, coupled with regular inspections. Periodic valuations and reporting keeps you updated on rental flows and capital appreciation.',
    },
    {
      img: '/assets/icons/bg-sidebar-desktop.svg',
      title: 'Liquidation',
      ptext: 'Further, should you wish to liquidate your investments at some point, we help you find a buyer through a secondary sale, in the private market through our extensive network.',
    },
    {
      img: '/assets/icons/bg-sidebar-desktop.svg',
      title: 'Corporate Governance',
      ptext: 'Streamlined investment process, with high level of corporate governance and disclosures.',
    },
  ];

  return (
    <div>
      <div className='flex justify-center lg:my-10'>
        <div className='text-left bg-white md:text-center py-10 px-10 lg:px-0 md:py-10 md:w-[70%]'>
          <h2 className='text-2xl md:text-5xl font-semibold capitalize'>Why FIRST/ASSET</h2>
          <p className='text-gray-500 sm:text-xl text-lg py-5'>
            {
              `Real estate investments are long term commitments and herein comes into play the
              enormous experience of the FIRST/ASSET team. It undertakes the most rigorous and
              stringent Asset Selection Process. This mitigates all possible risks, yet keeping in mind the
              future asset growth, builds a solid investment Portfolio.`
            }
          </p>
          <p className='text-gray-500 sm:text-xl text-lg pt-5'>
            {
              `The FIRST/ASSET founders have rich regulatory and real estate experience which
              clubbed with those of its esteemed and able Partners, that include Custodians, Trustees,
              Fund Accountants, Law Firms, Banks and IPC; are capable of delivering a superlative,
              comprehensive and seamless investment experience that is managed by reputed industry
              experts.`
            }
          </p>
        </div>
      </div>
      <div>
        <h3 className='text-center text-2xl md:text-4xl font-semibold capitalize pb-5'>Services Across Spectrum</h3>
        <InfograpicList data={data} />
      </div>

      <ThumbsSwiper />
      <section className='bg-gray-100 py-20'>
        <div className='grid place-items-center'>
          <ul className={`${style.ui} grid md:grid-cols-4 grid-cols-1 gap-4`}>
            <ProjectCard icon={<GrHomeRounded />} color='#ec4899' heading='Fractional Home' link='fractional' />
            <ProjectCard icon={<GrAnalytics />} color='#3b82f6' heading='Investment Structure' link='fractional/structure_investment' />
            <ProjectCard icon={<GrHost />} color='#e11d48' heading='Investment Process' link='fractional/investment_process' />
            <ProjectCard icon={<GrStatusUnknown />} color='#ca8a04' heading='Faqs' link='/faqs' />
          </ul>
        </div>

      </section>
    </div>
  )
}

export default Fractionalw