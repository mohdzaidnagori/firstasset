import Link from "next/link";
import Coverflows from "../components/swiper/Coverflows";
import TestmonialCradFlipEffect from "../components/swiper/TestmonialCradFlipEffect";
import Brands from "../components/swiper/Brands";
import ThumbsSwiper from "../components/swiper/ThumbsSwiper";
import Image from "next/image";
import Banner from "../components/swiper/homeBanner/Banner";
import TypeCards from "../components/card/TypeCards";


export default function Home() {

  return (
    <main>
      <article className="relative">
        <section className="px-5 pt-1">
          <div className="pb-1">
            <div className="relative w-[100%] h-[65vh] bg-no-repeat bg-center bg-cover overflow-hidden rounded-[16px]">
              <Banner />
            </div>
          </div>
        </section>
      </article>
      <section className="py-2 mt-4 xl:mx-20">
        <div className="text-center">
          <h3 className="text-3xl font-semibold">What does FIRST/ASSET offer</h3>
        </div>
        <div className=" my-12 mx-auto px-4 lg:px-8">
          <div className="flex justify-center flex-col lg:flex-row items-center gap-10 mx-auto">
            <TypeCards
              heading='Fractional'
              paragraph='Invest in Commercial Real Estate providing excellent rental yields by becoming a Fractional owner in a Grade A
              property.'
              url='/fractional'
            />
            <TypeCards
              heading='Property Managment'
              paragraph='We also manage your properties by leasing them out, do registration &amp; documentation, help you collect rent, in
              fit-out management and providing other soft services.'
              url='/project_managmet'
            />
            <TypeCards
              heading='Sole Selling'
              paragraph='Invest in Commercial Real Estate providing excellent rental yields by becoming a Fractional owner in a Grade A
                         property.'
              url='/sole'
            />
          </div>
        </div>
      </section>
      <section className="relative w-full bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-no-repeat lg:py-15">
        <div className="bg-slate-900/60 h-full m-auto">
          <div className="text-center pt-5 lg:pt-10 lg:pb-16">
            <h3 className="text-2xl lg:text-3xl text-white font-semibold">Mandated Projects (Sole Selling)</h3>
            <p className="lg:text-xl md:texl-lg text-gray-100 mt-2 px-2">Discover the most premium, yet affordable, real estate projects - both residential & commercial</p>
          </div>
          <Coverflows />
        </div>
      </section>

      <section className="bg-[#cae2cc]  px-2 md:px-10 md:py-[100px]  flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full" >
          <div className="flex flex-col gap-2 md:gap-5 p-5 md:py-0 py-5 md:mt-20 mt-6">
            <h3 className="md:text-2xl text-xl lg:text-3xl font-semibold italic">
              Discover the Success Stories of First Asset: Hear <br /> <span className="text-2xl lg:text-5xl md:text-4xl py-2 text-teal-900">What Our Clients Have to Say!</span>
            </h3>
            <p className="md:text-lg italic text-md lg:text-xl">{`At First Asset, we believe in the power of customer satisfaction and building strong relationships with our clients. Don't just take our word for it—take a moment to read through the testimonials from our esteemed clientele. These success stories reflect our commitment to providing exceptional real estate services, whether you're looking to rent or buy. Join the growing list of satisfied clients and experience the First Asset difference for yourself.`}</p>
          </div>
        </div>
        <div className=" md:w-1/2 pb-10" >
          <TestmonialCradFlipEffect />
        </div>
      </section>
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
              <h3 className="md:text-4xl text-3xl lg:text-5xl font-semibold text-white py-5">Experience Luxury Fractional Ownership</h3>
              <p className="md:text-lg text-white text-md lg:text-xl">Unlock the world of luxury real estate with First Asset Fractional Property Management service. Experience the epitome of exclusivity and flexibility in your real estate investments. With our expert team, we provide a hassle-free solution for fractional ownership, allowing you to own a share of prestigious properties around the globe</p>
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
      <section>
        <div className="text-center mt-10">
          <h3 className="text-3xl lg:text-4xl font-semibold capitalize">
            OUR ESTEEMED PARTNERS
          </h3>
        </div>
        <Brands />
      </section>



    </main>
  )
}
