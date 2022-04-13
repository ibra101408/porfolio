import React from 'react'
import './contact.css'
import './mail.js'
import ReactDOM from "react-dom";

import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {FaTelegramPlane} from 'react-icons/fa'


const Contact = () => {
    return(
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>daniil.vodenejev@voco.ee</h5>
                        <a href="mailto:danikvod@gmail.com">send an Email</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon"/>
                        <h4>Messenger</h4>
                        <h5>Daniil Vodenejev</h5>
                        <a href="https://m.me/danilkavodenejev" target="_blank">send a Message</a>
                    </article>

                    <article className="contact__option">
                        <FaTelegramPlane className="contact__option-icon"/>
                        <h4>Telegram</h4>
                        <h5>+372 55546052</h5>
                        <a href="https://t.me/vodenejev" target="_blank">send a Message</a>
                    </article>
                </div>
                {/*end of options*/}
                <form action="">
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required/>
                    <button type="submit" className="btn btn-primary">Send a Message</button>
                </form>
            </div>

        </section>
    )
}

export default Contact