import "./Navbar.css"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import { useState, useEffect, useRef } from 'react';

const Navbar = ({ title = "Akcay Design" }) => {

    const [isInputActive, setInputActive] = useState(true);
    const [isMenuActive, setMenuActive] = useState(false);
    const [isNavbarActive, setNavbarActive] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const triggerHeight = 5; // Navbar'ın renginin değişeceği scroll yüksekliği

        if (scrollPosition > triggerHeight) {
            setNavbarActive(true); // Örn: '#f0f0f0'
        } else {
            setNavbarActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1040) {
                setInputActive(true)
            }
        };

        // Pencere boyutu değiştiğinde handleResize işlevini çağırmak için olay dinleyicisi ekleyin
        window.addEventListener("resize", handleResize);

        // Komponent kaldırıldığında olay dinleyicisini temizleyin
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleInputClick = () => {
        if (window.innerWidth <= 1040) {
            setInputActive(true);
            return; // 1040 pikselin altında tıklamaya izin verme
        }
        setInputActive(!isInputActive);
    };

    const showMenu = () => {
        setTimeout(() => {
            setMenuActive(!isMenuActive);
        }, 100);
    };

    return (

        <>
            <div className={`containerNav ${isNavbarActive ? 'activeNav' : ''}`}>
                <Link href="/" className="logo">
                    <Image
                        src="/Images/door.png"
                        height={40}
                        width={40}
                        priority={true}
                        alt="Picture of the navbar"
                    />
                    <p>Akçay <br /> Design</p>
                </Link>
                <div className={`navbarContent ${isMenuActive ? 'menuActive' : ''}`} style={{ position: isMenuActive ? "absolute" : "relative" }} >
                    <ul className="contentUl">
                        <li className="contentLi"><Link href="/">Anasayfa</Link></li>
                        <li className="contentLi"><Link href="/photo-gallery">Fotoğraf Galerimiz</Link></li>
                        {/* <li className="contentLi"><a href="">Hakkımızda</a></li> */}
                        <li className="contentLi"><Link href="/contact">İletişim</Link></li>
                        {/* <li className="contentLi"><a href="">Teklif Ver</a></li> */}
                    </ul>
                </div>
                <div className="searchDiv">
                    <input autoComplete="off" id="search" type="text" placeholder="Arama Yap" className={`search-input ${isInputActive ? 'active' : ''}`} />
                    <svg disabled={!isInputActive} onClick={handleInputClick} style={{ right: isInputActive ? "5%" : "100%" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="25px" height="25px"><path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z" /></svg>
                </div>
                <div className="hamburgerButton" onClick={showMenu}>
                    {isMenuActive ? (
                        // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                        //     <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
                        // </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" id='instagram' viewBox="0 0 48 48" width="35px" height="35px">
                            <radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"
                            ><stop offset="0" stopColor="#fd5" /><stop offset=".328" stopColor="#ff543f" /><stop offset=".348" stopColor="#fc5245" /><stop offset=".504" stopColor="#e64771" /><stop offset=".643" stopColor="#d53e91" /><stop offset=".761" stopColor="#cc39a4" /><stop offset=".841" stopColor="#c837ab" /></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z" /><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9" /><stop offset=".999" stopColor="#4168c9" stopOpacity="0" /></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z" /><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z" /><circle cx="31.5" cy="16.5" r="1.5" fill="#fff" /><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z" /></svg>

                    ) : (
                        // <svg onClick={showMenu} xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                        //     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        // </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" id='instagram' viewBox="0 0 48 48" width="35px" height="35px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5" /><stop offset=".328" stopColor="#ff543f" /><stop offset=".348" stopColor="#fc5245" /><stop offset=".504" stopColor="#e64771" /><stop offset=".643" stopColor="#d53e91" /><stop offset=".761" stopColor="#cc39a4" /><stop offset=".841" stopColor="#c837ab" /></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z" /><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9" /><stop offset=".999" stopColor="#4168c9" stopOpacity="0" /></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z" /><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z" /><circle cx="31.5" cy="16.5" r="1.5" fill="#fff" /><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z" /></svg>

                    )}
                </div>

            </div>
        </>
    )
}
export default Navbar
