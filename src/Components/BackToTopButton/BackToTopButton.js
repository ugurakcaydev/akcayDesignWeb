"use client"
import React, { useState, useEffect } from 'react';
import "./backToTop.css"

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Sayfa yüklenmesi tamamlandığında ve her scroll olayında görünürlüğü güncelle
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const shouldShowButton = scrollTop > 100; // Scroll pozisyonunu özelleştirebilirsiniz

            setIsVisible(shouldShowButton);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Pürüzsüz bir kaydırma efekti için 'smooth' kullanabilirsiniz
        });
    };

    return (
        <div className={`backToTop ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
            </svg>
        </div>
    );
};

export default BackToTopButton;
