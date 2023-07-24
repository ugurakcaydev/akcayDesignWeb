
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import Navbar from '@/Components/Navbar/Navbar';
import Link from 'next/link';
import Form from '@/Components/Form/Form';
import "./style.css"
import "../../app/globals.css"
import Footer from '@/Components/Footer/Footer';
import BackToTopButton from '@/Components/BackToTopButton/BackToTopButton';
import SocialMedia from "@/Components/SocialMedia/index"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';


const products = [
    {
        name: 'Çocuk ve Genç Odası Tasarımlarımız',
        images: [""], /*['/Images/youngroom1.jpg', /* '/Images/youngroom2.jpg']*/
        slug: "cocuk-ve-genç-odası-tasarımlarımız"
    },
    {
        name: 'Mutfak Tasarımlarımız',
        images: ["/Images/mutfakTasarımlarımız.jpg", '/Images/kitchen1.jpg', '/Images/kitchen2.jpg', '/Images/kitchen4.jpg', "/Images/images1.jpg", "/Images/images1.jpg", "/Images/images1.jpg"], /*[/*'/Images/kitchen1.jpg', '/Images/kitchen2.jpg', '/Images/kitchen3.jpg', '/Images/kitchen4.jpg']*/
        slug: "mutfak-tasarımlarımız"
    },
    {
        name: 'Yemek Masası Tasarımlarımız',
        images: [""], //'/Images/dinnertable1.jpg' /*['/Images/dinnertable1.jpg']*/
        slug: "yemek-masası-tasarımlarımız"
    },
    {
        name: 'Yatak Odası Tasarımlarımız',
        images: [""],//'/Images/bedroom2.jpg' /*['/Images/bedroom1.jpg', '/Images/bedroom2.jpg', '/Images/bedroom3.jpg']*/
        slug: "yatak-odası-tasarımlarımız"
    },
    {
        name: 'Gardırop Tasarımlarımız',
        images: [""],//'/Images/gardırop1.jpg',
        slug: "gardırop-tasarımlarımız"
    },
    {
        name: 'Portmanto Tasarımlarımız',
        images: [""],//'/Images/drawr1.jpg',
        slug: "portmanto-tasarımlarımız"

    },
    {
        name: 'Banyo Tasarımlarımız',
        images: [""],
        slug: "banyo-tasarımlarımız"
    },
    {
        name: 'Banyo Tasarımlarımız',
        images: [""],
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
        <div lang='tr'>
            <Head>
            <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="description" content="Mobilya dekorasyonu, iç mimarlık ve tasarım hizmetleri sunan profesyonel firma. İç mekanlarınızı yeniden tasarlıyoruz." />
                    <meta name="keywords" content="mobilya,
                    dekorasyon,
                    iç mimarlık,
                    tasarım,
                    iç mekan tasarımı,
                    mobilya tasarımı,
                    ev dekorasyonu,
                    çocuk ve genç odası,tasarımları,
                    gardırop tasarımları,
                    portmanto tasarımları,
                    banyo tasarımları,
                    yatak odası tasarımları,
                    yemek masası tasarımları,
                    mutfak tasarımları,
                    mobilya montaj,
                    mimari proje çizimi,
                    tadilat dekorasyon
                    " />
                <title>Ürün Detay</title>
            </Head>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
            >
                {
                    <>
                        <SocialMedia />
                        <BackToTopButton />
                        <Navbar />
                        <div className='globalContainer'>
                            <div className='headerAndSlugContainer'>
                                <div className='headerSlug'>
                                    {decodedName}
                                </div>
                                <div className='smallAndBigImageContainer'>
                                    {decodedImages !== null ? (
                                        <div className="scrollDiv">
                                            <div className='smallImageContainer'>
                                                {
                                                    decodedImages.map((image, index) => (
                                                        <motion.div
                                                            variants={item}
                                                            key={index}
                                                            className={`smallImages ${selectedImage === index ? 'selected' : ''}`}
                                                            onClick={() => handleImageClick(index)}
                                                        >
                                                            <Image
                                                                // fill
                                                                // sizes='100vw'
                                                                width={0}
                                                                height={0}
                                                                sizes="100vw"
                                                                style={{ width: '100%', height: '90px', objectFit: "cover" }}
                                                                alt='Picture of the smallSlug'
                                                                src={image} />
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
                                            <Image
                                                src={decodedImages[selectedImage]}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: '100%', height: '100%', objectFit: "contain", padding: "1rem" }}
                                                alt='Picture of the bigSlug'
                                            />
                                        )}
                                    </div>
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
                                    <p>Tüm ürünlerimiz size özel olarak, sipariş üzerine üretilmektedir.</p>
                                    <p>Ürünlerimiz kesinlikle demonte ve hazır kalıp ürünler değildir.
                                    </p>
                                    <p>Dilediğiniz ölçüde, renkte ve özellikte istediğiniz modeli üretebiliriz.
                                    </p>
                                    <p>İstanbul içi ücretsiz nakliye ve kurulum hizmetimiz mevcuttur.
                                    </p>
                                    <p>Detaylı bilgi için <Link className='link' href="/contact">İletişim sayfamızdan</Link> bizimle iletişime geçebileceğiniz gibi buraya tıklayarak WhatsApp üzerinden de iletişim kurabilirsiniz.
                                    </p>
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

        </div>
    );

}