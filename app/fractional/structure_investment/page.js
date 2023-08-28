import Image from 'next/image'
import React from 'react'
import InfograpicList from '../../../components/infograpicList/InfograpicList';
import style from '../../../components/projectChild/ProjectCard.module.css'
import ProjectCard from '../../../components/projectChild/ProjectCard';

const Fractionals = () => {
  const data = [
    {
      img: '"../../public/assets/icons/imageedit_2_5602005075.png"',
      title:'The Concept',
      ptext: "Fractional ownership is a fast evolving concept and the right approach for the assets that are less liquid, difficult to manage, or unaffordable for small investors.",
    },
    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title:'Formation of SPV',
      ptext: 'With FIRST/ASSET, you would be investing in a hard real estate asset by means of an investment vehicle known as an SPV (Special Purpose Vehicle) in the form of a Pvt. Ltd. Company, in which all investors would be given a shareholding proportionate to the size of their investment in the form of equity shares and compulsorily convertible debentures.',
    },
    {
      img:'../../public/assets/icons/bg-sidebar-desktop.svg',
      title:'SPV Buys Asset',
      ptext:'The fractionally-owned property then becomes a property of the company as this SPV is incorporated for the sole purpose of acquiring and owning the asset'
    },
    
    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title:'SPV vs Joint Ownership',
      ptext: 'This option is more advantageous compared to the co-operative model of the joint ownership model since stamp duty can be saved on each instance of share transfer.',
    },
    {
      img:'../../public/assets/icons/bg-sidebar-desktop.svg',
      title:'Ease of Ownership',
      ptext:'It also makes shares easily transferable without disrupting the underlying ownership structure of the property. Further, due to this structure the ultimate decision-making power lies with the investors alone.'
    },
    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title:'Your Monthly Income',
      ptext: 'The return on your investment is in the form of interest on debentures and is paid monthly directly into your bank account.',
    },
    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title:'How is It Regulated',
      ptext: 'The company must comply with the provisions and regulations of the Companies Act, 1956 like filing of Annual Returns, Conducting Annual General Body meetings of the shareholders etc., that are undertaken by third- party consultants.',
    },
    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title:'Safety',
      ptext: 'All SPV related documents will be kept safely in the custody of the Custodian/Trusteeship partner who will also manage the complete fund flow to & from the SPV.',
    },
    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title:'Who Manages the Asset',
      ptext: 'FIRST/ASSET will provide asset management services to the SPV and take care of all property-related management issues, including accounting, secretarial, reporting, leasing, tenancy management and payments.',
    },
    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title:'What else do we do',
      ptext: 'Additionally, maintenance & property tax filing, insurance, and other operational aspects are also undertaken on behalf of the investors under the asset management services contract with the SPV.',
    },
  ];
  return (
    <div>
      <div className='flex justify-center items-center my-5 md:my-10'>
      <h2 className='text-2xl md:text-4xl font-semibold capitalize'>Structure of Investment</h2>
      </div>
      <InfograpicList data={data} />
      <section className='bg-gray-200 py-20'>
        <div className='grid place-items-center'>
          <ul className={`${style.ui} grid md:grid-cols-3 grid-cols-1`}>
            <ProjectCard num='1' color='#3b82f6' heading='Fractional Home' link='fractional' />
            <ProjectCard num='2' color='#e11d48' heading='Why First Asset' link='fractional/why_first_asset' />
            <ProjectCard num='3' color='#16a34a' heading='Investment Process' link='fractional/investment_process' />
          </ul>
        </div>

      </section>
    </div>
  )
}

export default Fractionals