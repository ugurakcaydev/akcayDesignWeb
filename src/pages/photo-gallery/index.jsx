import Navbar from '@/Components/Navbar/Navbar'
import React, { useState, useEffect } from 'react'
import "./style.css"
import "../../app/globals.css"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Footer from '@/Components/Footer/Footer'

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
    }
]



function index() {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
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
                    <div>
                        <Navbar />
                        <div className='globalContainer'>
                            <h1 className='header'>Fotoğraf Galerisi</h1>
                            <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "3rem", maxWidth: "1500px", flexWrap: "wrap", gap: "3rem" }}>
                                {
                                    hizmetlerimiz.map((hizmet,index) => (
                                        <div className='hizmetDiv' key={index}>
                                            {hizmet.name}
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                        <Footer />
                    </div>
            }
        </>

    )
}

export default index