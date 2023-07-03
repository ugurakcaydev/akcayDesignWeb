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
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import SocialMedia from "@/Components/SocialMedia/index"
import Link from 'next/link'
import { setCookie, getCookie } from "../Cookies/cookieUtils"
import { motion } from 'framer-motion'
import ProgressBar from '@/Components/ProgressBar/ProgressBar'

function Main() {

    // useEffect(() => {
    //     const cookieValue = getCookie('myCookie');
    //     console.log(cookieValue);

    //     setCookie('myCookie', 'someValue', 7); // 'someValue' doğrudan değişkenin değeri olmalı
    // }, []); // Boş dizi verilmesiyle useEffect sadece bir kere çalışacak şekilde ayarlanır.



    // const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 1000)
    // }, [])


    return (
        <>
            {/* <ProgressBar /> */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <SocialMedia />
                <BackToTopButton />
                <Navbar/>
                <Slider />
                <div className="content">
                    <div className="header">
                        ÖNE ÇIKAN ÜRÜNLERİMİZ
                    </div>
                    <ContentProduct />

                    <div className='header'>
                        <p>HİZMETLERİMİZ</p>
                    </div>
                    <Services />
                    <div className='header'>
                        <p>TEKLİF FORMU</p>
                    </div>
                    <div className='formDiv'>
                        <div className='formImg'>
                            <img src="/Images/images2.jpg" />
                        </div>
                        <Form />
                    </div>
                </div>
                <div className="containerCom">
                    <img className="commImg" src="/Images/coffe3.jpg" />
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

        </>
    )
}

export default Main