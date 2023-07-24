import React, { useState, useEffect } from 'react'
import Navbar from "@/Components/Navbar/Navbar"
import Slider from "@/Components/Slider/Slider"
import ContentProduct from "@/Components/ContentProduct/ContentProduct"
import Services from "@/Components/OurServices/Services"
import "../Components/Navbar/Navbar.css"
import Form from "@/Components/Form/Form"
import "./style.css"
import "../app/globals.css"
import Footer from "@/Components/Footer/Footer"
import BackToTopButton from '@/Components/BackToTopButton/BackToTopButton'
import SocialMedia from "@/Components/SocialMedia/index"
import Link from 'next/link'
import { motion } from 'framer-motion'
import PropagateLoader from "react-spinners/PropagateLoader";
import Image from 'next/image'
import Head from 'next/head';
const products = [
    {
        name: 'Çocuk ve Genç Odası Tasarımlarımız',
        images: "" /*['/Images/youngroom1.jpg', /* '/Images/youngroom2.jpg']*/
    },
    {
        name: 'Mutfak Tasarımlarımız',
        images: "/Images/mutfakTasarımlarımız.jpg",
    },
    {
        name: 'Yemek Masası Tasarımlarımız',
        images: "" //'/Images/dinnertable1.jpg' /*['/Images/dinnertable1.jpg']*/
    },
    {
        name: 'Yatak Odası Tasarımlarımız',
        images: ""//'/Images/bedroom2.jpg'
    },
    {
        name: 'Gardırop Tasarımlarımız',
        images: ""//'/Images/gardırop1.jpg',
    },
    {
        name: 'Portmanto Tasarımlarımız',
        images: "",//'/Images/drawr1.jpg',
    },
    {
        name: 'Banyo Tasarımlarımız',
        images: ""
    },
    {
        name: 'Banyo Tasarımlarımız',
        images: ""
    },

];
const services = [
    {
        image: '/Images/mobilya-üretim-montaj.jpg',
        title: 'Mobilya Üretim & Montaj'
    },
    {
        image: '/Images/Mimari Proje Çizimi.jpg',
        title: 'Mimari Proje Çizimi'
    },
    {
        image: '/Images/Mimari Dekorasyon Hizmetleri.jpg',
        title: 'Mimari Dekorasyon Hizmetleri'
    },
    {
        image: '/Images/Tadilat Dekorasyon Mimarlık Hizmetleri.jpg',
        title: 'Tadilat Dekorasyon Mimarlık Hizmetleri'
    },
    {
        image: '/Images/3D Tasarım Mimari Çizimleri.jpg',
        title: '3D Tasarım Mimari Çizimleri'
    },
    {
        image: '/Images/Dış Cephe Bina Tasarımları.webp',
        title: 'Dış Cephe Bina Tasarımları'
    },
    {
        image: '/Images/images1.jpg',
        title: 'Dış Cephe Bina Tasarımları'
    },
    {
        image: '/Images/images1.jpg',
        title: 'Dış Cephe Bina Tasarımları'
    }
];
function Main() {
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('https://localhost:5001/api/product/Get-All-Product', {
    //                 mode: 'cors'
    //             });
    //             const jsonData = await response.json();
    //             // console.log(jsonData);
    //             setData(jsonData);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };

    //     fetchData();
    // }, []);
    // if (!data) {
    //     return <div className='loadingScreeen'>
    //         <PropagateLoader
    //             size={15}
    //             aria-label="Loading Spinner"
    //             data-testid="loader"
    //         /></div>;
    // } else {
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
                    iç mekan,
                    mobilya tasarımı,
                    ev dekorasyonu,
                    iç mekan tasarımı,
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
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
                        rel="stylesheet"
                    />
                    <title>AkcayDesign</title>
                </Head>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}

                >
                    <SocialMedia />
                    <BackToTopButton />
                    <Navbar />
                    <Slider />
                    <div className="content">
                        <div className='productAndHeaderContainer'>
                            <p className="header">
                                ÖNE ÇIKAN ÜRÜNLERİMİZ
                            </p>
                            <div className='productContainer'>
                                {products.map((product, index) => (
                                    <div
                                        className='outsideProduct' key={index}>
                                        <div className='productImage'>
                                            {
                                                product.images.length > 0 ? <Link
                                                    href={{
                                                        pathname: `/product-details/${product.name.toLowerCase().replace(/\s+/g, '-')}`,
                                                    }}
                                                >
                                                    <div className='containerImage'>
                                                        <Image
                                                            // src={`/Images/${product.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                                                            src={product.images}
                                                            width={0}
                                                            height={0}
                                                            sizes="100vw"
                                                            style={{ width: '100%', height: '100%', objectFit: "cover" }}
                                                            alt="Picture of the product"
                                                        />
                                                    </div>
                                                </Link> :
                                                    <p>fotoğraf yok</p>

                                            }

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
                            </div>
                        </div>
                        <div className='servicesAndHeaderContainer'>
                            <p className='header'>
                                HİZMETLERİMİZ
                            </p>
                            <div className="servicesContainer">
                                {services.map((service, index) => (
                                    <div className="imagesServices" key={index}>
                                        <Image
                                            src={service.image}
                                            alt="Picture of the service"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '100%', objectFit: "cover" }} />
                                        <div className="aboutServices">{service.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='formAndHeaderContainer'>
                            <div className='header'>
                                <p>TEKLİF FORMU</p>
                            </div>
                            <div className='formDiv'>
                                <div className='formImg'>
                                    <Image
                                        src="/Images/images2.jpg"
                                        alt='Picture of the form'
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: '100%', objectFit: "cover", backgroundSize: "cover", borderRadius: "8px" }} />

                                </div>
                                <Form />
                            </div>
                        </div>
                    </div>
                    <div className="containerCom">
                        <Image
                            className="commImg"
                            src="/Images/coffe3.jpg"
                            alt='Picture of the homeCoffe'
                            width={0}
                            height={0}
                            sizes="100vw"

                            style={{ width: '100%', height: '260px', objectFit: "cover" }}
                        />
                        <div className="communication">
                            <div className="leftCom">
                                <h2>KAHVEYE BEKLİYORUZ</h2>
                                <p>Projelerimiz hakkında daha detaylı bilgi sahibi olmanız adına, sizi ofisimizde misafir etmekten mutluluk duyarız.</p>
                            </div>
                            <Link className='commLink' href="/contact">
                                <button className="commButton">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                    Bizimle İletişime Geçin
                                </button>
                            </Link>
                        </div>
                    </div>
                    <Footer />
                </motion.div>
            </div>
        )
    //}
}

export default Main