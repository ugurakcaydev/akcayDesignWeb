
import React, { useState, useEffect } from 'react'
import Navbar from '@/Components/Navbar/Navbar'
import "./contact.css"
import BackToTopButton from '@/Components/BackToTopButton/BackToTopButton'
import MapContainer from '@/Components/mapContainer/MapContainer'
import Footer from '@/Components/Footer/Footer'
import Form from '@/Components/Form/Form'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "../../app/globals.css"
export default function Contact() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <>
            {
                loading ?
                    <div className="loadingScreeen">
                        <ClimbingBoxLoader
                            color={"#fff"}
                            loading={loading}
                            // cssOverride={override}
                            size={20}
                        // aria-label="Loading Spinner"
                        // data-testid="loader"
                        />
                    </div>

                    :
                    <main className='body'>
                        <BackToTopButton />
                        <Navbar />
                        <div className='globalContainer'>
                            <div className='containerComm'>
                                <div className='leftComm'>
                                    <div className='hedarContainer'>
                                        <h1>Contact us</h1>
                                        <p>Our Friendly team woul love to hear from you</p>
                                    </div>
                                    <Form />
                                </div>
                                <div className='rightComm'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6023.774332213233!2d29.139539239811402!3d40.9839515178999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacf5500589c07%3A0x5cc92203c718a23f!2sCemile%20Besler%20%C4%B0lkokulu!5e0!3m2!1str!2str!4v1687428287701!5m2!1str!2str"
                                        style={{ border: "2" }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            <div className='informationContainer'>
                                <div className='infoDiv parlamaDiv'>
                                    <div className='infoIconDiv'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>
                                    <div className='infoPDiv'>
                                        <h3 >Bizi Arayın</h3>
                                        <p className='firstP'>Bu numaradan bize ulaşın</p>
                                        <p className='secondP'>(+90) 532 342 83 83</p>
                                    </div>
                                </div>
                                <div className='infoDiv parlamaDiv'>
                                    <div className='infoIconDiv'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                        </svg>

                                    </div>
                                    <div className='infoPDiv '>
                                        <h3>Ofise de Bekleriz</h3>
                                        <p className='firstP' >Ofisimizi Ziyaret Edebilirsiniz</p>
                                        <p className='secondP'>Altınşehir mahallesi/Doğanevler Caddesi </p>
                                    </div>
                                </div>
                                <div className='infoDiv parlamaDiv'>
                                    <div className='infoIconDiv'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>

                                    </div>
                                    <div className='infoPDiv'>
                                        <h3>Chat to Sales</h3>
                                        <p className='firstP'>En kısa sürede döneceğiz</p>
                                        <p className='secondP'>info@akcaymimarlik.com</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <Footer />
                    </main>

            }

        </>
    )
}
