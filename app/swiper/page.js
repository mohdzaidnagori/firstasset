'use client'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import Text from "../../components/card/RealEstateCard";
export default function Swipers() {

    return (
        <div className="container py-5">
            <div className="flex justify-center items-center shadow py-4">
                <div className=" w-[76%]">
                    <Swiper
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        spaceBetween={10}
                        coverflowEffect={{
                            rotate: 0, // Slide rotate in degrees
                            stretch: 40, // Stretch space between slides (in px)
                            depth: 300, // Depth offset in px (slides translate in Z axis)
                            modifier: 1, // Effect multipler
                            slideShadows: true // Enables slides shadows
                        }}

                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Text />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Text />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Text />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Text />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Text />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Text />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Text />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Text />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Text />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )

}