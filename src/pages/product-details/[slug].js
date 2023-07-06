
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import Navbar from '@/Components/Navbar/Navbar';
import Link from 'next/link';
import Form from '@/Components/Form/Form';
import "./style.css"
import "../../app/globals.css"
import Footer from '@/Components/Footer/Footer';
import BackToTopButton from '@/Components/BackToTopButton/BackToTopButton';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, FreeMode, Pagination } from 'swiper';
import SocialMedia from "@/Components/SocialMedia/index"
import { motion } from 'framer-motion';


const products = [
    {
        name: 'Çocuk ve Genç Odası Tasarımlarımız',
        images: [], /*['/Images/youngroom1.jpg', /* '/Images/youngroom2.jpg']*/
        slug: "cocuk-ve-genç-odası-tasarımlarımız"
    },
    {
        name: 'Mutfak Tasarımlarımız',
        images: ["/Images/kitchen3.jpg", '/Images/kitchen1.jpg', '/Images/kitchen2.jpg', '/Images/kitchen4.jpg', "/Images/images1.jpg", "/Images/images1.jpg", "/Images/images1.jpg"], /*[/*'/Images/kitchen1.jpg', '/Images/kitchen2.jpg', '/Images/kitchen3.jpg', '/Images/kitchen4.jpg']*/
        slug: "mutfak-tasarımlarımız"
    },
    {
        name: 'Yemek Masası Tasarımlarımız',
        images: [], //'/Images/dinnertable1.jpg' /*['/Images/dinnertable1.jpg']*/
        slug: "yemek-masası-tasarımlarımız"
    },
    {
        name: 'Yatak Odası Tasarımlarımız',
        images: [],//'/Images/bedroom2.jpg' /*['/Images/bedroom1.jpg', '/Images/bedroom2.jpg', '/Images/bedroom3.jpg']*/
        slug: "yatak-odası-tasarımlarımız"
    },
    {
        name: 'Gardırop Tasarımlarımız',
        images: [],//'/Images/gardırop1.jpg',
        slug: "gardırop-tasarımlarımız"
    },
    {
        name: 'Portmanto Tasarımlarımız',
        images: [],//'/Images/drawr1.jpg',
        slug: "portmanto-tasarımlarımız"

    },
    {
        name: 'Banyo Tasarımlarımız',
        images: [],
        slug: "banyo-tasarımlarımız"
    },
    {
        name: 'Banyo Tasarımlarımız',
        images: [],
        slug: "banyo-tasarımlarımız"
    },

];


const container = {
    visible: {
        transition: {
            // delayChildren: .2,
            staggerChildren: .2
        }
    }
}
const item = {
    hidden: {
        opacity: 0,
        translateY: 20
    },
    visible: {
        opacity: 1,
        translateY: 0
    }
}

export default function Page() {



    // const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 2000)
    // }, [])

    const router = useRouter();
    const slug = router.query.slug

    const decodedImages = products.find((product) => product.slug === slug)?.images ?? []
    const decodedName = products.find((product) => product.slug === slug)?.name


    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedExp, setSelectedExp] = useState(true)

    const handleImageClick = (index) => {
        setSelectedImage(index);
    };
    const handleExpClick = (boolean) => {
        setSelectedExp(boolean)
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={container}

        >

            {
                // loading ?
                //     <div className="loadingScreeen">
                //         <ClimbingBoxLoader
                //             color={"#fff"}
                //             loading={loading}
                //             // cssOverride={override}
                //             size={20}
                //         // aria-label="Loading Spinner"
                //         // data-testid="loader"
                //         />
                //     </div>
                //     :
                <>
                    <SocialMedia/>
                    <BackToTopButton />
                    <Navbar />
                    <div className='globalContainer'>
                        <div className='header'>
                            {decodedName}
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
                                <div className="scrollDiv">
                                    <div className='smallImageContainer'>
                                        {
                                            decodedImages.map((image, index) => (
                                                <motion.div
                                                    variants={item}
                                                    key={index}
                                                    className={`img ${selectedImage === index ? 'selected' : ''}`}
                                                    onClick={() => handleImageClick(index)}
                                                >
                                                    <img src={image} />
                                                </motion.div>
                                            ))
                                        }
                                    </div>
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
            }

        </motion.div>
    );

}