"use client"
import { Autoplay, Pagination, Keyboard, Parallax } from "swiper";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css"
import Link from 'next/link'
import Image from "next/image";
const swiperSlides = [
    {
        imageSrc: "/Images/images1.jpg",
        title: "Sizin İçin Özel Mobilyalar Tasarlıyoruz",
        description: "Yenilikçi yaklaşımlar, yeni nesil iç mimari anlayışıyla...",
    },
    {
        imageSrc: "/Images/images2.jpg",
        title: "Mutlu Mekanlar Tasarlıyoruz",
        description: "Yaşamak ve yaşatmak için.",
    },
    {
        imageSrc: "/Images/images1.jpg",
        title: "Üçüncü Swiper Slide",
        description: "Üçüncü slaytın açıklaması.",
    },
    {
        imageSrc: "/Images/images2.jpg",
        title: "Dördüncü Swiper Slide",
        description: "Dördüncü slaytın açıklaması.",
    },
];


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

                    modules={[Pagination, Keyboard, Autoplay, Parallax]}
                    className="mySwiper"
                >
                    {swiperSlides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={slide.imageSrc}
                                loading="lazy"
                                alt="Picture of the slider"
                                fill
                                sizes="100vw"
                                style={{ objectFit: "cover" }}

                            />
                            <div className="sliderSentence">
                                <h1>{slide.title}</h1>
                                <p>{slide.description}</p>
                                <Link className="sliderLink" href="/contact">
                                    İletişim
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
