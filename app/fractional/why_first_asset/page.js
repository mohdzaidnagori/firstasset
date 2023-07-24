import React from 'react'
import InfograpicList from '../../../components/infograpicList/InfograpicList'
import Image from 'next/image'

const Fractionalw = () => {

  const data = [
    {
      img:'"../../public/assets/icons/imageedit_2_5602005075.png"',
      title: 'END TO END',
      ptext: "FIRST/ASSET’s tech enabled platform handles the entire life cycle of the property including identification, identification, acquisition, asset management management (Lease Negotiation &amp; Management and Asset Maintenance) &amp; eventual sale (Asset Valuation &amp; Sale Negotiations).",
    },
    {
      img:'../../public/assets/icons/bg-sidebar-desktop.svg',
      title: 'RESEARCH DRIVEN',
      ptext: 'Research driven investment approach using quantitative analytics in Asset Identification via insights on properties, locations, pricing and building specifications.',
    },
    {
      img:'../../public/assets/icons/bg-sidebar-desktop.svg',
      title: 'RISK / DUE DILIGENCE',
      ptext: 'We follow an exhaustive selection process of both Asset and Occupier to mitigate any Asset related risks. Our legal &amp; valuation partners are the best in the industry.',
    },
    {
      img:'"../../public/assets/icons/bg-sidebar-desktop.svg"',
      title: 'EASE OF INVESTING',
      ptext: 'Invest in curated opportunities ONLINE (no physical paperwork) with complete documentation including Asset Registration, Document Safe keeping &amp; Document Digitalisation.',
    },
    {
      img:'../../public/assets/icons/bg-sidebar-desktop.svg',
      title: 'REPORTING/VALUATIONS',
      ptext: 'Post investment, we continue to make sure that the upkeep of the asset is looked after by our team, coupled with regular inspections. Periodic valuations and reporting keeps you updated on rental flows and capital appreciation.',
    },
    {
      img:'/assets/icons/bg-sidebar-desktop.svg',
      title: 'LIQUIDATION',
      ptext: 'Further, should you wish to liquidate your investments at some point, we help you find a buyer through a secondary sale, in the private market through our extensive network.',
    },
    {
      img:'/assets/icons/bg-sidebar-desktop.svg',
      title: 'CORPORATE GOVERNANCE',
      ptext: 'Streamlined investment process, with high level of corporate governance and disclosures.',
    },
  ];

  return (
    <div>
      <div className='flex justify-center items-center my-10 md:my-16'>
        <div className='w-[250px] h-[120px] relative'>
          <Image src='/assets/logo.jpg'
            fill={true}
            loading='lazy'
            style={{ objectFit: 'cover' }}
            alt="logo first asset" />
        </div>
      </div>
      <h3 className='uppercase text-center text-3xl md:text-6xl font-semibold'>Why First/Asset</h3>
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
        <h3 className='uppercase text-center text-3xl md:text-6xl font-semibold py-10'>Invest Across Spectrum</h3>
        <InfograpicList data={data} />
      </div>

    </div>
  )
}

export default Fractionalw