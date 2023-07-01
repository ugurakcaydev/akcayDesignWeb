'use client'
import React, { useEffect } from 'react';
import "./Services.css";

function Services() {
    const services = [
        {
            image: '/Images/mobilya-üretim-montaj.jpg',
            title: 'Mobilya Üretim & Montaj'
        },
        {
            image: '/Images/floor-plan-design.jpg',
            title: 'Mimari Proje Çizimi'
        },
        {
            image: '/Images/images1.jpg',
            title: 'Mimari Dekorasyon Hizmetleri'
        },
        {
            image: '/Images/images1.jpg',
            title: 'Tadilat Dekorasyon Mimarlık Hizmetleri'
        },
        {
            image: '/Images/3d-design.jpg',
            title: '3D Tasarım Mimari Çizimleri'
        },
        {
            image: '/Images/images1.jpg',
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
    return (
        <div className="servicesContainer">
            {services.map((service, index) => (
                <div className="imagesServices" key={index}>
                    <img src={service.image} alt="Service" />
                    <div className="aboutServices">{service.title}</div>
                </div>
            ))}
        </div>
    );
}

export default Services;
