import React from 'react'
import './header.css'
import CTA from "./CTA";
import ME from '../../assets/me_3.jpg'
import Header_socials from './head_socials'


const Header = () => {

    return(
        <header>
            <div className="container header__container">
                <h5>Hello, I'm </h5>
                <h1>Daniel</h1>
                <CTA />
                {/*<Example/> bullshit here*/}
                <Header_socials/>

                <div className="me">
                    <img src={ME} alt="me"/>
                </div>

                {/*<a href="#contact" className="scroll__down">Scroll down</a>*/}
            </div>
        </header>
    )
}

export default Header
