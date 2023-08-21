'use client'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from "./CoverFlow.module.css"
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Text from "../card/RealEstateCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../../app/redux/services/axios";


const Coverflows = () => {
    const [data, setData] = useState([])
    const cancelTokenSource = axios.CancelToken.source();

    const fraction_view = async () => {
        const url = 'admin/sole_view';
        const config = {
            cancelToken: cancelTokenSource.token
        };
        await axios.get(url, config)
            .then((response) => {
                setData(response.data.data)
            })
            .catch((error) => {
                if (axios.isCancel(error)) {
                    console.log('Request canceled');
                } else {
                    console.log(error);
                }
            })
    }
    useEffect(() => {
        fraction_view()
        return () => {
            cancelTokenSource.cancel(); // Cancel the request
        };
    }, [])


    return (
        <div className="py-5">
            <div className="flex justify-center items-center py-4">
                <div className="w-[76%]">
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
                                spaceBetween: 30,
                            },
                        }}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        spaceBetween={10}
                        coverflowEffect={{
                            rotate: 10, // Slide rotate in degrees
                            stretch: 40, // Stretch space between slides (in px)
                            depth: 300, // Depth offset in px (slides translate in Z axis)
                            modifier: 1, // Effect multipler
                            slideShadows: true // Enables slides shadows
                        }}

                        navigation={{
                            nextEl: '.swiper-button-next1',
                            prevEl: '.swiper-button-prev1',
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            data.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className={styles['swiper-slide']}>
                                        <Text item={item} />
                                    </SwiperSlide>

                                )
                            })
                        }
                        <div className="w-full flex justify-center pt-10 gap-4">
                            <div className="swiper-button-prev1 rounded-full p-3 bg-teal-500 hover:bg-teal-400">
                                <AiOutlineArrowLeft style={{ fontSize: '18px', fontWeight: '600', zIndex: '10' }} />
                            </div>
                            <div className="swiper-button-next1 rounded-full p-3 bg-teal-500 hover:bg-teal-400">
                                <AiOutlineArrowRight style={{ fontSize: '18px', fontWeight: '600', zIndex: '10' }} />
                            </div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Coverflows