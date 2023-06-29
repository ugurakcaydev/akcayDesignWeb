
import "./footer.css"
import React, { useEffect, useRef, useState } from 'react';
function Footer() {


    const divRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (divRef.current) {
                const rect = divRef.current.getBoundingClientRect();
                const visible = rect.top < window.innerHeight - 80 && rect.bottom >= 0;
                setIsVisible(visible);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className='footer'>
            <div className='topFooter'>
                <div className='footerLogoDiv'>
                    <img src="/Images/logo.png"/>
                </div>
                <div className='footerPDiv'>
                    <p>
                        Çalışanlarımıza en iyi eğitimi ve mükemmel bir çalışma ortamını sunarken,
                        müşterilerimize olağanüstü hizmet sunmayı taahhüt ediyoruz. Bu şirket prensibimiz kurulduğumuzdan bu yana devam ediyor.
                    </p>
                </div>
                <div ref={divRef} className={`footerInputDiv ${isVisible ? "visible" : ""}`} id="footerInputDiv">
                    <input className='footerInput' placeholder="Lütfen e-posta adresinizi giriniz" />
                    <button>Kaydol</button>
                </div>
                <div className='commFooter'>
                    <div className='commFooterInside'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        0532 342 83 83
                    </div>
                    <div className='footerLine'></div>
                    <div className='commFooterInside'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        info@akcaymimarlik.com
                    </div>
                </div>
            </div>
            <div className='botFooter'>
                Akçay Dekorasyon ve Mobilya Ticaret Limited Şirketi  @{new Date().getFullYear()} Tüm Hakları Saklıdır
            </div>
        </div>
    )
}

export default Footer