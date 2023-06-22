
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import Navbar from '@/Components/Navbar/Navbar';
import Link from 'next/link';
import Form from '@/Components/Form/Form';
import "./style.css"
import Footer from '@/Components/Footer/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, FreeMode, Pagination } from 'swiper';

export default function Page() {
    const router = useRouter();
    const { name, images } = router.query;
    const decodedName = decodeURIComponent(name);
    const [decodedImages, setDecodedImages] = useState([]);

    useEffect(() => {
        if (images && Array.isArray(images)) {
            const decodeImagesAsync = async () => {
                const decoded = await Promise.all(
                    images.map((image) => decodeURIComponent(image))
                );
                setDecodedImages(decoded);
            };

            decodeImagesAsync();
        }
    }, [images]);

    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedExp, setSelectedExp] = useState(true)

    const handleImageClick = (index) => {
        setSelectedImage(index);
    };
    const handleExpClick = (boolean) => {
        setSelectedExp(boolean)
    }

    return (
        <>
            <Navbar />
            <div style={{ marginTop: "105px", padding: "2% 5%" }}>
                <div className='header'>
                    - {decodedName} -
                </div>
                <div className='smallAndBigImageContainer'>
                    {decodedImages !== null ? (
                        // <Swiper
                        //     direction={"vertical"}
                        //     pagination={{
                        //         clickable: true,
                        //     }}
                        //     freeMode={true}
                        //     mousewheel={true}
                        //     modules={[Mousewheel, FreeMode, Pagination]}
                        //     slidesPerView={5}
                        //     spaceBetween={30}
                        //     className="mySwiper"
                        // >
                        //     {
                        //         decodedImages.map((image, index) => (
                        //             <div key={index} >
                        //                 <SwiperSlide
                        //                     className={`img ${selectedImage === index ? 'selected' : ''}`}
                        //                     onClick={() => handleImageClick(index)}
                        //                 ><img src={image} /></SwiperSlide>
                        //             </div>
                        //         ))
                        //     }
                        // </Swiper>
                        <div className='smallImageContainer'>
                            {
                                decodedImages.map((image, index) => (
                                    <div key={index}
                                        className={`img ${selectedImage === index ? 'selected' : ''}`}
                                        onClick={() => handleImageClick(index)}
                                    >
                                        <img src={image} />
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <div>Fotoğraf Bekleniyor..</div>
                    )}

                    <div className='bigImageContainer'>
                        {decodedImages !== null && (
                            <img src={decodedImages[selectedImage]} />
                        )}
                    </div>
                </div>
            </div>
            <div className='explanation'>
                <div className='explanation-header'>
                    <div onClick={() => handleExpClick(true)}
                        className={selectedExp ? 'selected' : ''}
                    >Açıklama</div>
                    <div onClick={() => handleExpClick(false)}
                        className={!selectedExp ? 'selected' : ''}
                    >Sipariş Ver</div>
                </div>
                {selectedExp ? (
                    <div className='explanation-content'>
                        {/* Açıklama içeriği buraya gelecek */}
                        {/* <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" ,rowGap:".5rem",padding:".5rem"}}> */}
                        <p>Tüm ürünlerimiz size özel olarak, sipariş üzerine üretilmektedir.</p>
                        <p>Ürünlerimiz kesinlikle demonte ve hazır kalıp ürünler değildir.
                        </p>
                        <p>Dilediğiniz ölçüde, renkte ve özellikte istediğiniz modeli üretebiliriz.
                        </p>
                        <p>İstanbul içi ücretsiz nakliye ve kurulum hizmetimiz mevcuttur.
                        </p>
                        <p>Detaylı bilgi için <Link className='link' href="/contact">İletişim sayfamızdan</Link> bizimle iletişime geçebileceğiniz gibi buraya tıklayarak WhatsApp üzerinden de iletişim kurabilirsiniz.
                        </p>
                        {/* </div> */}
                    </div>
                ) : (
                    <div className='order-content'>
                        {/* Sipariş içeriği buraya gelecek */}
                        <Form />
                    </div>
                )}
            </div>
            <Footer />
        </>
    );

}