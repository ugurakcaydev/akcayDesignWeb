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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
                        </svg>


                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 72 72">
                            <path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z"></path>
                        </svg>
                    )}
                </div>

            </div>
        </>
    )
}
export default Navbar
