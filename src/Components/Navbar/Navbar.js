import "./Navbar.css"
import Link from 'next/link'
import React from 'react';
import { useState, useEffect, useRef } from 'react';

function Navbar() {

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
                    <img src="/Images/door.png" />
                    <p>Akçay    <br/> Design</p>
                </Link>
                <div className={`navbarContent ${isMenuActive ? 'menuActive' : ''}`} style={{ position: isMenuActive ? "absolute" : "relative" }} >
                    <ul className="contentUl">
                        <li className="contentLi"><Link href="/">Anasayfa</Link></li>
                        <li className="contentLi"><Link href="/photo-gallery">Fotoğraf Galerimiz</Link></li>
                        <li className="contentLi"><a href="">Hakkımızda</a></li>
                        <li className="contentLi"><Link href="/contact">İletişim</Link></li>
                        <li className="contentLi"><a href="">Teklif Ver</a></li>
                    </ul>
                </div>
                <div className="searchDiv">
                    <input autoComplete="off" id="search" type="text" placeholder="Arama Yap" className={`search-input ${isInputActive ? 'active' : ''}`} />
                    <svg disabled={!isInputActive} onClick={handleInputClick} style={{ right: isInputActive ? "5%" : "100%" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="25px" height="25px"><path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z" /></svg>
                </div>
                <div className="hamburgerButton" >
                    <svg onClick={showMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

            </div>
        </>
    )
}
export default Navbar
