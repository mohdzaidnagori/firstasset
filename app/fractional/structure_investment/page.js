import Image from 'next/image'
import React from 'react'
import InfograpicList from '../../../components/infograpicList/InfograpicList';
import style from '../../../components/projectChild/ProjectCard.module.css'
import ProjectCard from '../../../components/projectChild/ProjectCard';
import { GrDomain, GrHomeRounded, GrHost } from 'react-icons/gr';
import ThumbsSwiper from '../../../components/swiper/ThumbsSwiper';

const Fractionals = () => {
  const data = [
    {
      img: '"../../public/assets/icons/imageedit_2_5602005075.png"',
      title: 'The Concept',
      ptext: "Fractional ownership is a fast evolving concept and the right approach for the assets that are less liquid, difficult to manage, or unaffordable for small investors.",
    },
    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title: 'Formation of SPV',
      ptext: 'With FIRST/ASSET, you would be investing in a hard real estate asset by means of an investment vehicle known as an SPV (Special Purpose Vehicle) in the form of a Pvt. Ltd. Company, in which all investors would be given a shareholding proportionate to the size of their investment in the form of equity shares and compulsorily convertible debentures.',
    },
    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title: 'SPV Buys Asset',
      ptext: 'The fractionally-owned property then becomes a property of the company as this SPV is incorporated for the sole purpose of acquiring and owning the asset'
    },

    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title: 'SPV vs Joint Ownership',
      ptext: 'This option is more advantageous compared to the co-operative model of the joint ownership model since stamp duty can be saved on each instance of share transfer.',
    },
    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title: 'Ease of Ownership',
      ptext: 'It also makes shares easily transferable without disrupting the underlying ownership structure of the property. Further, due to this structure the ultimate decision-making power lies with the investors alone.'
    },
    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title: 'Your Monthly Income',
      ptext: 'The return on your investment is in the form of interest on debentures and is paid monthly directly into your bank account.',
    },
    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title: 'How is It Regulated',
      ptext: 'The company must comply with the provisions and regulations of the Companies Act, 1956 like filing of Annual Returns, Conducting Annual General Body meetings of the shareholders etc., that are undertaken by third- party consultants.',
    },
    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title: 'Safety',
      ptext: 'All SPV related documents will be kept safely in the custody of the Custodian/Trusteeship partner who will also manage the complete fund flow to & from the SPV.',
    },
    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title: 'Who Manages the Asset',
      ptext: 'FIRST/ASSET will provide asset management services to the SPV and take care of all property-related management issues, including accounting, secretarial, reporting, leasing, tenancy management and payments.',
    },
    {
      img: '../../public/assets/icons/bg-sidebar-desktop.svg',
      title: 'What else do we do',
      ptext: 'Additionally, maintenance & property tax filing, insurance, and other operational aspects are also undertaken on behalf of the investors under the asset management services contract with the SPV.',
    },
  ];
  return (
    <div>
      <div className='flex justify-center items-center my-5 md:my-10'>
        <h2 className='text-2xl md:text-5xl font-semibold capitalize'>Structure of Investment</h2>
      </div>
      <InfograpicList data={data} />

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
            <ProjectCard icon={<GrHomeRounded />} color='#3b82f6' heading='Fractional Home' link='fractional' />
            <ProjectCard icon={<GrDomain />} color='#e11d48' heading='Why First Asset' link='fractional/why_first_asset' />
            <ProjectCard icon={<GrHost />} color='#16a34a' heading='Investment Process' link='fractional/investment_process' />
          </ul>
        </div>

      </section>
    </div>
  )
}

export default Fractionals