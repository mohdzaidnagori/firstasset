import Coverflows from "../components/swiper/Coverflows";
import TestmonialCradFlipEffect from "../components/swiper/TestmonialCradFlipEffect";
import Brands from "../components/swiper/Brands";
import ThumbsSwiper from "../components/swiper/ThumbsSwiper";
import Image from "next/image";
import Banner from "../components/swiper/homeBanner/Banner";
import TypeCards from "../components/card/TypeCards";
import ProjectManagment from "../components/swiper/ProjectManagment";




export default function Home() {
 
  return (
    <>
      {
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
            <section className="bg-gray-100">
              <div className="py-2 my-4 xl:mx-20">
                <div className="text-center">
                  <h3 className="md:text-3xl text-xl font-semibold px-5 md:px-0 pt-1">Unlocking Opportunities: Comprehensive Real Estate Services Tailored For You</h3>
                </div>
                <div className=" my-8 mb-12 mx-auto px-4 lg:px-8">
                  <div className="flex justify-center flex-col lg:flex-row items-center gap-10 mx-auto">
                    <TypeCards
                      heading='Fractional Investment'
                      paragraph='Earn passive income and capital appreciation of upto 15-18% per annum. Invest in Grade A, high yielding Commercial Real Estate providing excellent rental yields.'
                      url='/fractional'
                    />
                    <TypeCards
                      heading='Property Management'
                      paragraph='We also manage your properties by leasing them out, do registration &amp; documentation, help you collect rent, in
              fit-out management and providing other soft services.'
                      url='/project_managmet'
                    />
                    <TypeCards
                      heading='Mandated Projects'
                      paragraph='Welcome to the world of limitless possibilities. Welcome to FIRST/ASSET. Empowering dreams and transforming visions into reality. Our Mandated Real Estate Projects.'
                      url='/sole'
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="relative w-full bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-no-repeat">
              <div className="bg-slate-900/60 m-auto">
                <div className="text-center pt-5">
                  <h3 className="text-2xl lg:text-3xl text-white font-semibold">Mandated Projects</h3>
                  <p className="lg:text-xl md:texl-lg text-gray-100 mt-2 px-2">A world of exclusivity: Redefining living through our premium real estate projects.</p>
                </div>
                <Coverflows />
              </div>
            </section>

            <section className="bg-[#cae2cc]  px-2 md:px-10 md:pt-[40px]  flex flex-col md:flex-row">
              <div className="md:w-1/2 w-full" >
                <div className="flex flex-col gap-2 md:gap-5 p-5 md:py-0 py-5 md:mt-10 mt-6">
                  <h3 className="md:text-2xl text-xl lg:text-3xl font-semibold italic">
                    Discover the Success Stories of FIRST/ASSET <br /> <span className="text-2xl lg:text-5xl md:text-4xl py-2 text-teal-900">Hear What Our Clients Have to Say!</span>
                  </h3>
                  <p className="md:text-lg italic text-md lg:text-xl">{`At FIRST/ASSET, we believe in the power of customer satisfaction and building strong relationships with our clients. Don't just take our word for it—take a moment to read through the testimonials from our esteemed clientele. These success stories reflect our commitment to providing exceptional real estate services. Join the growing list of satisfied clients and experience the FIRST/ASSET difference for yourself.`}</p>
                </div>
              </div>
              <div className=" md:w-1/2 pb-20" >
                <TestmonialCradFlipEffect />
              </div>
            </section>
            <section className="bg-white p-4">
              <h1 className="md:text-3xl text-2xl p-3 font-semibold">Properties Under Our Management</h1>
              <ProjectManagment />
            </section>
            <ThumbsSwiper />
            <section>
              <div className="text-center mt-4">
                <h3 className="md:text-3xl text-2xl lg:text-4xl font-semibold capitalize">
                  Our Esteemed Partners
                </h3>
              </div>
              <Brands />
            </section>
          </main>
      }
    </>

  )
}
