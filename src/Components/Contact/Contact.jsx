import React, { useState } from 'react'
import emailJs from '@emailjs/browser'
import './Contact.css'
import { useNavigate } from "react-router-dom";

const Contact = () => {

    const [sentMail, setSentMail] = useState(false)

    const navigate = useNavigate()

    const goToHome = () => navigate('/')

    const sendEmail = e => {
        e.preventDefault()

        setSentMail(!sentMail)

        emailJs.sendForm( 'Devgmail' , 'template_7v9t26u' , e.target , 'FNOnqB462zok6A8yo')
        .then(r => console.log(r))
        .catch(err => console.log(err))
    }

  return (
    <>
    {
        sentMail ?

        <div className="sent_container">
            <h1><i className='bx bxs-check-circle'></i> E-mail sent</h1>
            <button className='btn' onClick={goToHome}>Return to Home</button>
        </div>

        :

    <div className="form_container">
        <h1>Contact Us</h1>
        <form className='form_email' onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" className="form_input" name='name' placeholder='What is your Name?'/>
            <label>E-mail</label>
            <input type="email" className="form_input" name='email' placeholder='Write your email' />
            <label>Your Message</label>
            <textarea className='form_input' name="message" id="" cols="30" rows="10" placeholder='Write your message here!!'></textarea>
            <button className='btn'>Send it!</button>
        </form>
    </div>
    }
    </>
    )
}

export default Contact