import Image from 'next/image'
import React from 'react'

const Fractionals = () => {
    return (
        <div>
            <div className='flex justify-center items-center my-10 md:my-20'>
                <div className='w-[250px] h-[120px] relative'>
                    <Image src='/assets/logo.jpg'
                        fill={true}
                        loading='lazy'
                        style={{ objectFit: 'cover' }}
                        alt="logo first asset" />
                </div>
            </div>
            <div className='px-6 sm:px-10 md:px-14 lg:px-40 text-xl text-black flex flex-col gap-10 my-10 mb-20'>
                <p>Fractional ownership is a fast evolving concept and the right approach
                    for the assets that are less liquid, difficult to manage, or unaffordable for
                    small investors.</p>
                <p>With FIRST/ASSET, you would be investing in a hard real estate asset by means
                    of an investment vehicle known as an SPV (Special Purpose Vehicle) in the form
                    of a Pvt. Ltd. Company, in which all investors would be given a shareholding
                    proportionate to the size of their investment in the form of equity shares and
                    compulsorily convertible debentures. The fractionally-owned property then becomes
                    a property of the company as this SPV is incorporated for the sole purpose of
                    acquiring and owning the asset.</p>
                <p>This option is more advantageous compared to the co-operative model of
                    the joint ownership model since stamp duty can be saved on each
                    instance of share transfer. It also makes shares easily transferable
                    without disrupting the underlying ownership structure of the
                    property. Further, due to this structure the ultimate decision-making power lies
                    with the investors alone.</p>
                <p>The return on your investment is in the form of interest on debentures and is paid
                    monthly directly into your bank account.</p>
                <p>The company must comply with the provisions and regulations of the
                    Companies Act, 1956 like filing of Annual Returns, Conducting Annual
                    General Body meetings of the shareholders etc., that are undertaken by third-
                    party consultants.</p>
                <p>All SPV related documents will be kept safely in the custody of the
                    Custodian/Trusteeship partner who will also manage the complete fund flow to &amp;
                    from the SPV.</p>
                <p>First/Asset will provide asset management services to the SPV and take care of
                    all property-related management issues, including accounting, secretarial,
                    reporting, leasing, tenancy management and payments, maintenance &amp; property
                    tax filing, insurance, and other operational aspects on behalf of the investors
                    under the asset management services contract with the SPV.</p>
            </div>
        </div>
    )
}

export default Fractionals