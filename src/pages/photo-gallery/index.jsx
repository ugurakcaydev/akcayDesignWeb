import Navbar from '@/Components/Navbar/Navbar'
import React, { useState, useEffect } from 'react'
import "./style.css"
import "../../app/globals.css"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Footer from '@/Components/Footer/Footer'
import { motion } from 'framer-motion'
import "../../app/globals.css"
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
        <>
            <Navbar />
            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
            >

                <div className='globalContainer'>
                    <h1 className='header'>FOTOĞRAF GALERİSİ</h1>
                    <div className='cartContainer gap flex'>
                        {
                            hizmetlerimiz.map((hizmet, index) => (
                                <motion.div
                                    variants={item}
                                    className='hizmetDiv' key={index}>
                                    <img src='/Images/coffe3.jpg' />
                                    <p className='hizmetName'>{hizmet.name}</p>
                                </motion.div>
                            ))
                        }
                    </div>

                </div>
                <Footer />
            </motion.div>

        </>

    )
}

export default index