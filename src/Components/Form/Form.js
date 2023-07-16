import React from 'react'
import { useState, useEffect } from 'react';
import "./Form.css"
// import AdminListIndex from '@/pages/adminPanel/d3F7$8k2Prs345ER89W2C/adminlist/AdminListIndex';

import { Resend } from 'resend';

import { Email } from './Email';
function Form() {

    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('https://localhost:5001/api/email/send', {
    //                 mode: 'cors'
    //             });
    //             const jsonData = await response.json();
    //             console.log(jsonData);
    //             setData(jsonData);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };

    //     fetchData();
    // }, []);
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const resend = new Resend('re_Ym19pDe6_D1U8pCMQWaFmvZ5dmZY9Tvqr');

        resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'akcayugur01@gmail.com',
            subject: 'Hello World',
            html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        });
    };

    const { name, lastName, email, phone } = formData;

    return (
        <div className='inputContainer'>
            <div className='firstAndLastDiv'>
                <div className='firstNameDiv'>
                    <input
                        id='firstName'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="firstName" className={`firstNameLabel ${name.length > 0 ? 'activeLabel' : ''}`}>Ad</label>
                </div>
                <div className='lastNameDiv'>
                    <input
                        id='lastName'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="lastName" className={`lastNameLabel ${lastName.length > 0 ? 'activeLabel' : ''}`}>
                        Soyad
                    </label>
                </div>
            </div>
            <div className='emailDiv'>
                <input
                    id='email'
                    autoComplete="none"
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange} />
                <label htmlFor="email" className={`emailLabel ${email.length > 0 ? 'activeLabel' : ''}`}>E-Mail</label>
            </div>
            <div className='phoneDiv'>
                <input
                    id='phone'
                    type='text'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                />
                <label htmlFor="phone" className={`phoneLabel ${phone.length > 0 ? 'activeLabel' : ''}`}>Telefon(+90)</label>

            </div>
            <textarea
                className='messageDiv'
                placeholder='Mesaj'

                name='message'
                value={formData.message}
                onChange={handleInputChange}>
            </textarea>

            <button className='messageButton' onClick={handleSubmit}>Formu Gönder</button>
        </div>
    )
}

export default Form
