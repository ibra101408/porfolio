import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return(
        <footer>
            {/*<a href="#" className="footer__logo">DaN</a>*/}

            <ul className="permalinks">
                <li><a id="home" href="#" className="hover-underline-animation">Home</a></li>
                <li><a id="about" href="#about" className="hover-underline-animation">About</a></li>
                <li><a id="experience" href="#experience" className="hover-underline-animation">Experience</a></li>
                <li><a id="portfolio" href="#portfolio" className="hover-underline-animation">Portfolio</a></li>
                <li><a id="contact" href="#contact" className="hover-underline-animation">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a id="facebook" href="https://www.facebook.com/danilkavodenejev/" target="_blank"><BsFacebook/></a>
                {/*<a id="instagram" href="https://www.instagram.com/stuffofdrone/" target="_blank"><BsInstagram/></a>*/}
                <a id="github" href="https://github.com/ibra101408" target="_blank"><BsGithub/></a>
                <a id="LinkedIn" href="https://www.linkedin.com/in/daniil-vodenejev-29a74617b/" target="_blank"><FaLinkedinIn/></a>
            </div>

        </footer>
    )
}

export default Footer