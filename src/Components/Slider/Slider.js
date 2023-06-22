"use client"
import {Autoplay, Pagination,Keyboard } from "swiper";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.css"

export default function App() {
    return (
        <>
            <div className="containerSlider">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    keyboard={{
                        enabled: true,
                    }}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    //   }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                   
                    modules={[Pagination,Keyboard,Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="/Images/images1.jpg" loading="lazy" /></SwiperSlide>
                    <SwiperSlide><img src="/Images/images2.jpg" loading="lazy" /></SwiperSlide>
                    <SwiperSlide><img src="/Images/images3.jpg" loading="lazy" /></SwiperSlide>
                    <SwiperSlide><img src="/Images/images4.jpg" loading="lazy" /></SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
