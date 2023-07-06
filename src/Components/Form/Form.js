import React from 'react'
import { useState } from 'react';
import "./Form.css"
function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'firstName') {
            setFirstName(value);
        } else if (name === 'lastName') {
            setLastName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'phone') {
            setPhone(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };
    return (
        <div className='inputContainer'>
            <div className='firstAndLastDiv'>
                <div className='firstNameDiv'>
                    <input
                        name='firstName'
                        value={firstName}
                        onChange={handleInputChange}
                    />
                    <label className={`lastNameLabel ${firstName.length > 0 ? 'activeLabel' : ''}`}>Ad</label>
                </div>
                <div className='lastNameDiv'>
                    <input
                        name='lastName'
                        value={lastName}
                        onChange={handleInputChange}
                    />
                    <label className={`lastNameLabel ${lastName.length > 0 ? 'activeLabel' : ''}`}>
                        Soyad
                    </label>
                </div>
            </div>
            <div className='emailDiv'>
                <input
                    autoComplete="none"
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleInputChange} />
                <label className={`emailLabel ${email.length > 0 ? 'activeLabel' : ''}`}>E-Mail</label>
            </div>
            <div className='phoneDiv'>
                <input
                    type='text'
                    name='phone'
                    value={phone}
                    onChange={handleInputChange}
                />
                <label className={`phoneLabel ${phone.length > 0 ? 'activeLabel' : ''}`}>Telefon(+90)</label>

            </div>
            <textarea className='messageDiv' placeholder='Mesaj'>
            </textarea>

            <button className='messageButton'>Formu Gönder</button>
        </div>
    )
}

export default Form
