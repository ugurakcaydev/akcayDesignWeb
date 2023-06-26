"use client"
import React, { useMemo, useState, useEffect } from 'react'
import Link from 'next/link';
import "./content.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
const products = [
    {
        name: 'Çocuk ve Genç Odası Tasarımlarımız',
        images: [] /*['/Images/youngroom1.jpg', /* '/Images/youngroom2.jpg']*/
    },
    {
        name: 'Mutfak Tasarımlarımız',
        images: ["/Images/kitchen3.jpg", '/Images/kitchen1.jpg', '/Images/kitchen2.jpg', '/Images/kitchen4.jpg', "/Images/images1.jpg", "/Images/images1.jpg", "/Images/images1.jpg"] /*[/*'/Images/kitchen1.jpg', '/Images/kitchen2.jpg', '/Images/kitchen3.jpg', '/Images/kitchen4.jpg']*/
    },
    {
        name: 'Yemek Masası Tasarımlarımız',
        images: [] //'/Images/dinnertable1.jpg' /*['/Images/dinnertable1.jpg']*/
    },
    {
        name: 'Yatak Odası Tasarımlarımız',
        images: []//'/Images/bedroom2.jpg' /*['/Images/bedroom1.jpg', '/Images/bedroom2.jpg', '/Images/bedroom3.jpg']*/
    },
    {
        name: 'Gardırop Tasarımlarımız',
        images: []//'/Images/gardırop1.jpg',
    },
    {
        name: 'Portmanto Tasarımlarımız',
        images: [],//'/Images/drawr1.jpg',
    },
    {
        name: 'Banyo Tasarımlarımız',
        images: []
    },
    {
        name: 'Banyo Tasarımlarımız',
        images: []
    },

];


function ContentProduct() {

    // const [selectedImage, setSelectedImage] = useState(null);
    // const [showModal, setShowModal] = useState(false);

    // const handleImageClick = (image) => {
    //     setSelectedImage(image);
    //     setShowModal(true);
    // };

    // const handleCloseModal = () => {
    //     setSelectedImage(null);
    //     setShowModal(false);
    // };

    // const memoizedProducts = useMemo(() => products, []);
    return (
        <div className='productContainer'>
            {products.map((product, index) => (
                <div className='outsideProduct' key={index}>
                    <div className='productImage'>
                        {product.images.length > 0 ? (
                            <Link
                                href={{
                                    pathname: `/product-details/${product.name.toLowerCase().replace(/\s+/g, '-')}`,
                                }}
                            >
                                <div className='containerImage'>
                                    {/* {product.images.map((image, imageIndex) => (
                                    <img
                                        key={imageIndex}
                                        src={image}
                                        alt="Ürün Resmi"
                                        loading="lazy"
                                        onClick={() => handleImageClick(image)}
                                        className='productImg'
                                    />
                                ))} */}
                                    <img
                                        // key={inde}
                                        src={product.images[0]}
                                        alt="Ürün Resmi"
                                        // loading="lazy"
                                        // onClick={() => handleImageClick(product.images)}
                                        className='productImg'
                                    />
                                </div>
                            </Link>

                        ) : (
                            <p>Resim bulunamadı</p>
                        )}
                        {/* <Swiper
                            slidesPerView={1}
                            spaceBetween={8}
                            pagination={true}
                            modules={[Pagination]}

                        >
                            {product.images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image} loading="lazy" />
                                </SwiperSlide>
                            ))}
                        </Swiper> */}
                        {/* {product.images.map((image, index) => (
                            <img src={image} key={index} loading="lazy" />
                        ))} */}
                    </div>
                    <div className='productName'>
                        <p>{product.name}</p>
                    </div>
                    <div className='buttonDiv'>
                        <Link className="button button1"
                            href={{
                                pathname: `/product-details/${product.name.toLowerCase().replace(/\s+/g, '-')}`,
                            }}>İNCELE</Link>
                    </div>
                </div>
            ))}
            {/* {
                selectedImage && (
                    <div className={`modal ${showModal ? "show" : ""}`} >
                        <div className={`modal-content ${showModal ? "show" : ""}`} >
                            <img src={selectedImage} alt="Büyük Resim" />
                            <button onClick={handleCloseModal}>Kapat</button>
                        </div>
                    </div>
                )
            } */}
        </div>
    )
}
export default ContentProduct
