import Navbar from '@/Components/Navbar/Navbar'
import React, { useState, useEffect } from 'react'
import "./style.css"
import "../../app/globals.css"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Footer from '@/Components/Footer/Footer'
import { motion } from 'framer-motion'
import "../../app/globals.css"
import Image from 'next/image';
import Head from 'next/head';
import BackToTopButton from '@/Components/BackToTopButton/BackToTopButton'
import SocialMedia from "@/Components/SocialMedia/index"
const hizmetlerimiz = [
    {
        name: "özel banyo"
    },
    {
        name: "hazır banyo",
    },
    {
        name: "hazır banyo",
    },
    {
        name: "hazır banyo",
    },
    {
        name: "hazır banyo",
    },
    {
        name: "hazır banyo",
    },
    {
        name: "hazır banyo",
    }, {
        name: "hazır banyo",
    }, {
        name: "hazır banyo",
    }, {
        name: "hazır banyo",
    }, {
        name: "hazır banyo",
    }, {
        name: "hazır banyo",
    }, {
        name: "hazır banyo",
    }, {
        name: "hazır banyo",
    }, {
        name: "hazır banyo",
    }, {
        name: "hazır banyo",
    }, {
        name: "hazır banyo",
    }, {
        name: "hazır banyo",
    },
]

const container = {
    visible: {
        transition: {
            delayChildren: .3,
            staggerChildren: 0.2
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

function index() {

    // const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 2000)
    // }, [])

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
                <title>Akçay Design/Fotoğraf Galerisi</title>
            </Head>

            <Navbar />

            <motion.div

                initial="hidden"
                animate="visible"
                variants={container}
            >
                <SocialMedia />
                <BackToTopButton />
                <div className='globalContainer'>
                    <div className='headerAndImageContainer'>
                        <h1 className='header'>FOTOĞRAF GALERİSİ</h1>
                        <div className='cartContainer gap flex'>
                            {
                                hizmetlerimiz.map((hizmet, index) => (
                                    <motion.div
                                        variants={item}
                                        className='hizmetDiv' key={index}>
                                        <Image
                                            width={400}
                                            height={260}
                                            src='/Images/coffe3.jpg'
                                            alt='Picture of the gallery'
                                            loading='lazy'
                                            style={{ borderRadius: "8px", zIndex: 1 }}
                                        />

                                        <p className='hizmetName'>{hizmet.name}</p>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>

                </div>
                <Footer />
            </motion.div>


        </div>

    )
}

export default index