import React from 'react'
import InfograpicList from '../../../components/infograpicList/InfograpicList'
import Image from 'next/image'

const Fractionalw = () => {
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
        <InfograpicList />
      </div>

    </div>
  )
}

export default Fractionalw