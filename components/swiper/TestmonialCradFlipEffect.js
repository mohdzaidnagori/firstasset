'use client'
import React, {useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/navigation';



// import required modules
import { EffectCards } from "swiper";
import Image from "next/image";
import axios from "../../app/redux/services/axios";
import { useEffect } from "react";



const TestmonialCradflipEffect = () => {

    const [data, setData] = useState([])

    const fraction_view = async () => {
        const url = 'admin/testimonial_view';
        await axios.get(url)
            .then((response) => {
                setData(response.data.data)
            })
            .catch((error) => {
                    console.log(error);
            })
    }
    useEffect(() => {
        fraction_view()
    }, [])
    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                style={{overflow:'visible'}}
                className="w-[210px] h-[330px] md:w-[270px] md:h-[400px]"
            >
                {
                    data?.map((items) => {
                        const url = JSON.parse(items.images)
                        return <SwiperSlide key={items.id} style={{ backgroundColor: items.bg }} className={`rounded-2xl`}  >
                            <div className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] relative rounded-full overflow-hidden m-auto mt-7 object-cover">
                                <Image
                                    src={`https://skilliza.com/wscubetech/public/images/${url[0]}`}
                                    alt="testimonial people"
                                    fill={true}
                                    style={{ objectFit: "cover" }}
                                    loading="lazy"
                                />
                            </div>
                            <div className="m-auto md:p-5 px-2 py-2">
                                <p className="text-xs md:text-md lg:text-[18px] italic font-semibold text-slate-800 text-center">{items.description}</p>
                                <h4 className="uppercase text-xl font-bold pt-4 text-center text-teal-900">{items.name}</h4>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </>
    )
}

export default TestmonialCradflipEffect