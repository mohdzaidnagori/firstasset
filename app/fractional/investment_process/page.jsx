import Image from 'next/image'
import React from 'react'

const Fractionali = () => {
    return (
        <div className='bg-gray-100'>
            <div className='flex justify-center items-center py-10 bg-white'>
                <div className='w-[250px] h-[120px] relative'>
                    <Image src='/assets/logo.jpg'
                        fill={true}
                        loading='lazy'
                        style={{ objectFit: 'cover' }}
                        alt="logo first asset" />
                </div>
            </div>
           <div className='flex justify-center items-center bg-white'>
           <div className='md:py-6 md:pb-14 pb-10 md:w-[70%] w-[90%]'>
                <p className='md:text-xl text-lg font-medium  text-black text-center'>We provides the expertise&#44; inspiration&#44; and creativity needed to effectively
                    FIRST/ASSETs tech enabled platform handles the entire life cycle of the property
                    including identification&#44; acquisition&#44; asset management (Lease Negotiation &amp;
                    Management and Asset Maintenance) &amp; eventual sale (Asset Valuation &amp; Sale

                    Negotiations).</p>
            </div>
           </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 '>
                <div className='md:p-10 md:px-20 overflow-hidden'>
                    <div className='h-[500px] relative'>
                        <Image src='/assets/img1.png'
                            fill={true}
                            loading='lazy'
                            alt="logo first asset" />
                    </div>
                </div>
                <div>
                    <ul className='flex flex-col gap-4 text-lg text-black h-auto lg:mt-12 list-disc p-6 lg:p-0'>
                        <li>First&#44; we identify high-performance assets with growth potential across prime locations in
                            India.</li>
                        <li>Once you show interest in this opportunity on FIRST/ASSET&#44; your KYC will be
                            required and once verified&#44; you will receive all legal documentation pertaining to the
                            property and SPV-related documents for your perusal and scrutiny.</li>
                        <li>After you decide to move forward with the opportunity and block your investment&#44; you are
                            requested to e-sign a binding Expression of Interest (EOI) and transfer the initial 10% token
                            as advance.</li>
                        <li>Once 100% commitment is received from interested investors&#44; the opportunity is considered
                            to be fully funded.</li>
                        <li>You will then be required to transfer the remaining 90% amount.</li>
                        <li>Your investment amount will then be routed through an escrow mechanism to the share
                            subscription accounts and ultimately&#44; to the current account of the SPV.</li>
                        <li>You will be allocated equity shares and compulsorily convertible debentures (CCDs) in the
                            Private Limited Company.</li>
                        <li>The SPV will then proceed to purchase the asset.</li>
                    </ul>
                </div>
            </div>
            <div>
                <ul className='flex flex-col gap-4 text-lg text-black h-auto lg:mt-12 list-disc px-6 pb-10 lg:p-0 lg:ps-16 lg:pb-10'>
                    <li>First/Asset will provide complete asset management services to the SPV and take care of all
                        property-related management issues.</li>
                    <li>All SPV related documents will be kept safely in the custody of the Custodian/Trusteeship
                        partner who will also manage the complete fund flow to &amp; from the SPV.</li>
                    <li>The return on your investment is in the form of interest on debentures and is paid monthly
                        directly into your bank account.</li>
                    <li>You can exit your investment once the initial lock-in period is complete. This can be done in
                        three different ways  Asset sale&#44; private sale &amp; resale.</li>
                </ul>
            </div>
        </div>
    )
}

export default Fractionali