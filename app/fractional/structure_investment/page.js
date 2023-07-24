import Image from 'next/image'
import React from 'react'
import InfograpicList from '../../../components/infograpicList/InfograpicList';

const Fractionals = () => {
    const data = [
        {
          img:'"../../public/assets/icons/imageedit_2_5602005075.png"',
          ptext: "Fractional ownership is a fast evolving concept and the right approach for the assets that are less liquid, difficult to manage, or unaffordable for small investors.",
        },
        {
          img:'../../public/assets/icons/bg-sidebar-desktop.svg',
          ptext: 'With FIRST/ASSET, you would be investing in a hard real estate asset by means of an investment vehicle known as an SPV (Special Purpose Vehicle) in the form of a Pvt. Ltd. Company, in which all investors would be given a shareholding proportionate to the size of their investment in the form of equity shares and compulsorily convertible debentures. The fractionally-owned property then becomes a property of the company as this SPV is incorporated for the sole purpose of acquiring and owning the asset',
        },
        {
          img:'../../public/assets/icons/bg-sidebar-desktop.svg',
          ptext: 'This option is more advantageous compared to the co-operative model of the joint ownership model since stamp duty can be saved on each instance of share transfer. It also makes shares easily transferable without disrupting the underlying ownership structure of the property. Further, due to this structure the ultimate decision-making power lies with the investors alone.',
        },
        {
          img:'"../../public/assets/icons/bg-sidebar-desktop.svg"',
          ptext: 'The return on your investment is in the form of interest on debentures and is paid monthly directly into your bank account.',
        },
        {
          img:'../../public/assets/icons/bg-sidebar-desktop.svg',
          ptext: 'The company must comply with the provisions and regulations of the Companies Act, 1956 like filing of Annual Returns, Conducting Annual General Body meetings of the shareholders etc., that are undertaken by third- party consultants.',
        },
        {
          img:'/assets/icons/bg-sidebar-desktop.svg',
          ptext: 'All SPV related documents will be kept safely in the custody of the Custodian/Trusteeship partner who will also manage the complete fund flow to &amp; from the SPV.',
        },
        {
          img:'/assets/icons/bg-sidebar-desktop.svg',
          ptext: 'First/Asset will provide asset management services to the SPV and take care of all property-related management issues, including accounting, secretarial, reporting, leasing, tenancy management and payments, maintenance &amp; property tax filing, insurance, and other operational aspects on behalf of the investors under the asset management services contract with the SPV.',
        },
      ];  
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
            <InfograpicList data={data} />
        </div>
    )
}

export default Fractionals